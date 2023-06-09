import { Test, TestingModule } from '@nestjs/testing';
import { KnowledgeCategoryController } from './knowledge-category.controller';
import { KnowledgeCategoryService } from './knowledge-category.service';

describe('KnowledgeCategoryController', () => {
  let controller: KnowledgeCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KnowledgeCategoryController],
      providers: [KnowledgeCategoryService],
    }).compile();

    controller = module.get<KnowledgeCategoryController>(
      KnowledgeCategoryController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
