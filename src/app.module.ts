// import * as dotenv from 'dotenv';

import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KnowledgeCategoryModule } from './knowledge-category/knowledge-category.module';
import { KnowledgePointsModule } from './knowledge-points/knowledge-points.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_DATABASE_URL'),
        dbName: 'w-tool-service',
      }),
    }),
    AuthModule,
    KnowledgeCategoryModule,
    KnowledgePointsModule,
    UploadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
