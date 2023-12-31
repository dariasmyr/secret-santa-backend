import { registerEnumType } from '@nestjs/graphql';

export enum AccountScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    email = "email",
    isNotificationsEnabled = "isNotificationsEnabled",
    roles = "roles",
    status = "status",
    avatarUrl = "avatarUrl",
    username = "username"
}


registerEnumType(AccountScalarFieldEnum, { name: 'AccountScalarFieldEnum', description: undefined })
