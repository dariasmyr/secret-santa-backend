import * as console from 'node:console';

import { Test, TestingModule } from '@nestjs/testing';

import { ExternalProfileProvider } from '@/@generated/nestgraphql/prisma/external-profile-provider.enum';
import { PrismaService } from '@/common/prisma/prisma.service';

import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileService, PrismaService],
    }).compile();

    service = module.get<ProfileService>(ProfileService);
  });

  test('should find profile by id', async () => {
    const profile = {
      id: '117911639726729414130',
      provider: ExternalProfileProvider.GOOGLE,
    };

    const result = await service.getProfileByExternalId(
      profile.id,
      profile.provider,
    );

    console.log(result);

    expect(result).toBeDefined();
  });
});
