import { ConfigService } from '@nestjs/config';
import { EnvVariables } from './environment/env-variables.enum';

export const databaseConfigFactory = (configService: ConfigService) => ({
  uri: configService.get(EnvVariables.DATABASE_URI),
});
