import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TokenModule } from 'src/token/token.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule,
    MongooseModule.forRoot(process.env.MONGO_WRITE_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    TokenModule,
  ],
})
export class AppModule {}
