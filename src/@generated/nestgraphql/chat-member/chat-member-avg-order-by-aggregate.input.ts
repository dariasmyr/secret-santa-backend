import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ChatMemberAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chatId?: keyof typeof SortOrder;
}
