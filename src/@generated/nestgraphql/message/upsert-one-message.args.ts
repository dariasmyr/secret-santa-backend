import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageCreateInput } from './message-create.input';
import { MessageUpdateInput } from './message-update.input';

@ArgsType()
export class UpsertOneMessageArgs {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;

    @Field(() => MessageCreateInput, {nullable:false})
    @Type(() => MessageCreateInput)
    create!: MessageCreateInput;

    @Field(() => MessageUpdateInput, {nullable:false})
    @Type(() => MessageUpdateInput)
    update!: MessageUpdateInput;
}
