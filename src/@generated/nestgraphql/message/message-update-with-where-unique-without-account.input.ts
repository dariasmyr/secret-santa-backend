import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageUpdateWithoutAccountInput } from './message-update-without-account.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutAccountInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;

    @Field(() => MessageUpdateWithoutAccountInput, {nullable:false})
    @Type(() => MessageUpdateWithoutAccountInput)
    data!: MessageUpdateWithoutAccountInput;
}
