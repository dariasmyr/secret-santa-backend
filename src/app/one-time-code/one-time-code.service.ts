import { Injectable } from '@nestjs/common';

import { OneTimeCode } from '@/@generated/nestgraphql/one-time-code/one-time-code.model';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class OneTimeCodeService {
  constructor(private prismaService: PrismaService) {}

  async createOneTimeCode(telegramId: string): Promise<OneTimeCode> {
    // 30 minutes
    // eslint-disable-next-line no-magic-numbers
    const expiresAt = new Date(Date.now() + 30 * 60 * 1000);
    // Random 6 numbers
    // eslint-disable-next-line no-magic-numbers
    const code = Math.floor(100_000 + Math.random() * 900_000).toString();

    return this.prismaService.oneTimeCode.upsert({
      where: { telegramId },
      update: { code, expiresAt },
      create: { telegramId, code, expiresAt },
    });
  }

  async validateOneTimeCode(
    telegramId: string,
    code: string,
  ): Promise<boolean> {
    const oneTimeCode = await this.prismaService.oneTimeCode.findUnique({
      where: { telegramId },
    });

    if (!oneTimeCode) {
      return false;
    }

    if (oneTimeCode.code !== code) {
      return false;
    }

    return oneTimeCode.expiresAt >= new Date();
  }

  async deleteOneTimeCode(telegramId: string): Promise<boolean> {
    await this.prismaService.oneTimeCode.delete({ where: { telegramId } });
    return true;
  }
}
