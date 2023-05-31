import { Module } from '@nestjs/common';
import { KnowledgePointsService } from './knowledge-points.service';
import { KnowledgePointsController } from './knowledge-points.controller';

@Module({
  controllers: [KnowledgePointsController],
  providers: [KnowledgePointsService],
})
export class KnowledgePointsModule {}
