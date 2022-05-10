import { LivejasminInterface } from './../../interface/livejasmin.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LivejasminDao } from 'src/domain/livejasmin/port/dao/livejasmin-dao';
import { LivejasminDto } from 'src/application/livejasmin/query/dto/livejasmin.dto';
import axios from 'axios';

@Injectable()
export class LivejasminDaoAPI implements LivejasminDao {
  constructor(
    @InjectModel('Livejasmin')
    private readonly livejasminModel: Model<LivejasminInterface>,
  ) {}

  async lists(startDate: Date, endDate: Date): Promise<LivejasminDto[]> {
    const baseUrl = 'https://partner-api.modelcenter.jasmin.com';
    // const performerStates = `performerStates[]='active'`;
    const queryString = `?fromDate=${startDate.toISOString()}&toDate=${endDate.toISOString()}`;
    console.log('@queryString:', queryString);
    try {
      const performersData = await axios
        .get(`${baseUrl}/v1/reports/performers${queryString}`, {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization:
              'Bearer 42b1ecc7aa2bd20bc51afad67b6990c8454d3f8547895eb38949d576ade0fe71',
          },
        })
        .then((res) => {
          return res.data.data;
        });

      const perfDataFiltered = performersData.filter(
        ({ total }) => total.earnings.value !== 0 || total.workTime.value !== 0,
      );
      const structuredData: LivejasminDto[] = perfDataFiltered.map(
        ({ screenName, date, total }) => {
          const transactionId = screenName + date.to + total.workTime.value;
          const connection = {
            performerName: screenName.toLowerCase(),
            endTime: new Date(date.to),
            totalTime: total.workTime.value,
            performerEarned: total.earnings.value,
            transactionId: Buffer.from(transactionId).toString('hex'),
            platform: 'livejasmin',
          };
          return connection;
        },
      );
      return structuredData;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
