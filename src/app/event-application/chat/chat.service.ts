import { Injectable } from '@nestjs/common';
import { Chat } from '@prisma/client';

import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class ChatService {
  constructor(private readonly prismaService: PrismaService) {}

  async getChatById(chatId: number): Promise<Chat | null> {
    return this.prismaService.chat.findUnique({
      where: {
        id: chatId,
      },
    });
  }

  async getChatByEventApplicationPairId(
    eventApplicationPairId: number,
  ): Promise<Chat | null> {
    return this.prismaService.chat.findFirst({
      where: {
        eventApplicationPair: {
          some: {
            id: eventApplicationPairId,
          },
        },
      },
    });
  }
}
