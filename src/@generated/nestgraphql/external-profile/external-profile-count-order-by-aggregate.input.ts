import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ExternalProfileCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    externalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;
}