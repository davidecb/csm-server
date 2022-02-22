import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserProviderModule } from './provider/usuario-proveedor.module';

@Module({
  imports: [UserProviderModule],
  controllers: [UserController],
})
export class UserModule {}
