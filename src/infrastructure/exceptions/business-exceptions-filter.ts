import { BusinessErrors } from './business-errors.enum';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Message } from './message';
import { AppLogger } from '../config/ceiba-logger.service';
import { BusinessError } from 'src/domain/errors/business-error.error';

@Catch(BusinessError)
export class BusinessExceptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: AppLogger) {
    this.logger.setContext(BusinessExceptionsFilter.name);
  }

  catch(error: BusinessError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const statusCode =
      HttpStatus[BusinessErrors[error.name]] ||
      HttpStatus[BusinessErrors.DEFAULT];
    const message: Message = {
      statusCode: statusCode as number,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: error.message,
    };

    this.logger.customError(error);
    response.status(statusCode as number).json(message);
  }
}
