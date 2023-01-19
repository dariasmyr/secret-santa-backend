import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/prisma/prisma.service';
import { EasyconfigService } from 'nestjs-easyconfig';
import { CryptoService } from '@/common/crypto/crypto.service';
import { Account } from '@/@generated/nestgraphql/account/account.model';
import { AccountStatus } from '@/@generated/nestgraphql/prisma/account-status.enum';
import { AccountRole } from '@/@generated/nestgraphql/prisma/account-role.enum';

@Injectable()
export class AccountService {
  constructor(
    private prisma: PrismaService,
    private config: EasyconfigService,
    private crypto: CryptoService,
  ) {}

  public async createAccount(
    email: string,
    password: string,
  ): Promise<Account> {
    const salt = this.config.get('SALT');
    const passwordHash = await this.crypto.hash(password, salt);
    return this.prisma.account.create({
      data: {
        email,
        passwordHash,
        status: AccountStatus.ACTIVE,
        roles: [AccountRole.USER],
      },
    });
  }

  async getAccountByEmail(email: string): Promise<Account | null> {
    return this.prisma.account.findUnique({
      where: {
        email,
      },
    });
  }

  async changePassword(
    account: Account,
    password: string,
    newPassword: string,
  ): Promise<boolean> {
    const salt = this.config.get('SALT');
    const isPasswordValid = await this.crypto.hashVerify(
      password,
      salt,
      account.passwordHash,
    );

    if (isPasswordValid) {
      const newPasswordHash = await this.crypto.hash(newPassword, salt);
      await this.prisma.account.update({
        where: {
          id: account.id,
        },
        data: {
          passwordHash: newPasswordHash,
        },
      });
      return true;
    } else {
      throw new Error('Invalid password');
    }
  }
}