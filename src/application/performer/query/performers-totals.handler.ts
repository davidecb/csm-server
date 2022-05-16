import { StreamateDto } from 'src/application/streamate/query/dto/streamate.dto';
import { User } from 'src/domain/user/model/user';
import { Injectable } from '@nestjs/common';
import { PerformerDao } from 'src/domain/performer/port/dao/performer-dao';
import { PerformerDto } from './dto/performer.dto';
import { ListsCamsodaHandler } from 'src/application/camsoda/query/lists-camsoda.handler';
import { ListsImLiveHandler } from 'src/application/imLive/query/lists-imLive.handler';
import { ListsLivejasminHandler } from 'src/application/livejasmin/query/lists-livejasmin.handler';
import { ListsStreamateHandler } from 'src/application/streamate/query/lists-streamate.handler';
import { PerformersTotalsDto } from './dto/performersTotals.dto';

@Injectable()
export class PerformersTotalsHandler {
  constructor(
    private _performerDao: PerformerDao,
    private readonly _listsCamsodaHandler: ListsCamsodaHandler,
    private readonly _listsImLiveHandler: ListsImLiveHandler,
    private readonly _listsLivejasminHandler: ListsLivejasminHandler,
    private readonly _listsStreamateHandler: ListsStreamateHandler,
  ) {}

  private searchPerformerInfo(
    performers: PerformerDto[],
    performerName: string,
  ) {
    const notFounded = {
      performerName,
      location: 'desconocida',
      performerShift: 'desconocido',
      notes: [],
      id: '',
    };
    const searchResult = performers.find((performer) =>
      performer.platformNames.includes(performerName),
    );

    const performerInfo = searchResult
      ? {
          performerName: searchResult.performerName,
          location: searchResult.location.replace('é', 'e'),
          performerShift: searchResult.performerShift.replace('é', 'e'),
          notes: searchResult.notes,
          id: searchResult._id,
        }
      : notFounded;
    return performerInfo;
  }

  async run(
    user: User,
    listsTo: string,
    listsFrom: string,
  ): Promise<PerformersTotalsDto[]> {
    const { location, userShift, role } = user;
    const searchOptions = {};
    if (location !== '*') {
      searchOptions['location'] = location;
      searchOptions['performerShift'] = userShift;
    }
    const camsoda = this._listsCamsodaHandler.run(listsTo, listsFrom);
    const imLive = this._listsImLiveHandler.run(listsTo, listsFrom);
    const livejasmin = this._listsLivejasminHandler.run(listsTo, listsFrom);
    const streamate = this._listsStreamateHandler.run(listsTo, listsFrom);
    const [streamates, livejasmins, camsodas, imLives] = await Promise.all([
      streamate,
      livejasmin,
      camsoda,
      imLive,
    ]);
    console.log('@Streamate:', streamates.length);
    console.log('@Livejasmin:', livejasmins.length);
    console.log('@Camsoda:', camsodas.length);
    console.log('@ImLive:', imLives.length);
    const platformsData = [
      ...streamates,
      ...livejasmins,
      ...camsodas,
      ...imLives,
    ];

    //Sort array and create totals array by model
    const dataSorted = platformsData.sort((a, b) => {
      if (a.performerName > b.performerName) {
        return 1;
      } else if (a.performerName < b.performerName) {
        return -1;
      } else {
        return 0;
      }
    });
    const groupedTotals = {
      personalInfo: {
        performerName: 'total',
        location: '',
        performerShift: '',
      },
      time: {
        total: 0,
        platforms: {},
        locations: {},
      },
      earnings: {
        total: 0,
        platforms: {},
        locations: {},
      },
      notes: [],
    };
    const totals: PerformersTotalsDto[] = [];
    const performers = await this._performerDao.lists(searchOptions);

    dataSorted.map((data: any, index: number) => {
      const timeTot = data.totalTime;
      const earnTot = data.performerEarned;
      const performerInfo = this.searchPerformerInfo(
        performers,
        data.performerName,
      );
      const performerIndex = totals.findIndex((total) => {
        return total.personalInfo.performerName === performerInfo.performerName;
      });
      const monitorFilter =
        role === 'monitor' && performerInfo.location === 'desconocida';
      if (performerIndex < 0 && !monitorFilter) {
        const personalInfo = {
          performerName: performerInfo.performerName,
          location: performerInfo.location,
          performerShift: performerInfo.performerShift,
          id: performerInfo.id,
        };
        // inicializo totales modelo
        const time = {
          total: timeTot,
          [data.platform]: timeTot,
        };
        const earnings = {
          total: earnTot,
          [data.platform]: earnTot,
        };
        const notes = [...performerInfo.notes];

        totals.push({
          personalInfo,
          time,
          earnings,
          notes,
        });
      } else if (performerIndex >= 0 && !monitorFilter) {
        // actualizo totales modelo
        totals[performerIndex].time.total += timeTot;
        const currTime = totals[performerIndex].time[data.platform];
        totals[performerIndex].time[data.platform] = currTime
          ? currTime + timeTot
          : timeTot;

        totals[performerIndex].earnings.total += earnTot;
        const currEarning = totals[performerIndex].earnings[data.platform];
        totals[performerIndex].earnings[data.platform] = currEarning
          ? currEarning + earnTot
          : earnTot;
      }

      if (!monitorFilter) {
        // actualizo totales globales
        groupedTotals.time.total += timeTot;
        groupedTotals.earnings.total += earnTot;
        // actualizo totales por plataforma
        const platformTime = groupedTotals.time.platforms[data.platform];
        groupedTotals.time.platforms[data.platform] = platformTime
          ? platformTime + timeTot
          : timeTot;

        const platformEarn = groupedTotals.earnings.platforms[data.platform];
        groupedTotals.earnings.platforms[data.platform] = platformEarn
          ? platformEarn + earnTot
          : earnTot;
        // actualizo totales por ubicación
        const locationTime =
          groupedTotals.time.locations[performerInfo.location];
        groupedTotals.time.locations[performerInfo.location] = locationTime
          ? {
              total: locationTime.total + timeTot,
            }
          : { total: timeTot };

        const locationEarn =
          groupedTotals.earnings.locations[performerInfo.location];
        groupedTotals.earnings.locations[performerInfo.location] = locationEarn
          ? {
              total: locationEarn.total + earnTot,
            }
          : { total: earnTot };
      }

      if (index === dataSorted.length - 1) {
        performers.map((performer: PerformerDto) => {
          const performerIndex = totals.findIndex((total) => {
            return total.personalInfo.performerName === performer.performerName;
          });
          if (performerIndex < 0) {
            const personalInfo = {
              performerName: performer.performerName,
              location: performer.location,
              performerShift: performer.performerShift,
              id: performer._id,
            };
            const time = {
              total: 0,
            };
            const earnings = {
              total: 0,
            };
            const notes = performer.notes;
            totals.push({
              personalInfo,
              time,
              earnings,
              notes,
            });
          }
        });
      }
    });
    const sortedTotals = totals.sort((a, b) => {
      if (
        a.personalInfo.performerName.toLowerCase() >
        b.personalInfo.performerName.toLowerCase()
      ) {
        return 1;
      } else if (
        a.personalInfo.performerName.toLowerCase() <
        b.personalInfo.performerName.toLowerCase()
      ) {
        return -1;
      } else {
        return 0;
      }
    });
    sortedTotals.unshift(groupedTotals);
    return sortedTotals;
  }
}
