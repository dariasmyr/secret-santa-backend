import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChatMemberWhereInput } from './chat-member-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumChatMemberRoleFilter } from '../prisma/enum-chat-member-role-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';
import { ChatNullableRelationFilter } from '../chat/chat-nullable-relation-filter.input';

@InputType()
export class ChatMemberWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ChatMemberWhereInput], {nullable:true})
    AND?: Array<ChatMemberWhereInput>;

    @Field(() => [ChatMemberWhereInput], {nullable:true})
    OR?: Array<ChatMemberWhereInput>;

    @Field(() => [ChatMemberWhereInput], {nullable:true})
    NOT?: Array<ChatMemberWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    accountId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    chatId?: IntNullableFilter;

    @Field(() => EnumChatMemberRoleFilter, {nullable:true})
    role?: EnumChatMemberRoleFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    account?: AccountRelationFilter;

    @Field(() => ChatNullableRelationFilter, {nullable:true})
    chat?: ChatNullableRelationFilter;
}
