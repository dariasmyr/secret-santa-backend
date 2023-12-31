import { Test, TestingModule } from '@nestjs/testing';

import { DebugModule } from '@/app/debug/debug.module';
import { LoggerModule } from '@/common/logger/logger.module';

import { DebugResolver } from './debug.resolver';

describe('QueryResolver', () => {
  let resolver: DebugResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule, DebugModule],
      providers: [DebugResolver],
    }).compile();

    resolver = module.get<DebugResolver>(DebugResolver);
  });

  test('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
