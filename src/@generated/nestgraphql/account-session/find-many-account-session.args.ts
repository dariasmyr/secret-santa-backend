import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountSessionWhereInput } from './account-session-where.input';
import { Type } from 'class-transformer';
import { AccountSessionOrderByWithRelationInput } from './account-session-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AccountSessionWhereUniqueInput } from './account-session-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AccountSessionScalarFieldEnum } from './account-session-scalar-field.enum';

@ArgsType()
export class FindManyAccountSessionArgs {

    @Field(() => AccountSessionWhereInput, {nullable:true})
    @Type(() => AccountSessionWhereInput)
    where?: AccountSessionWhereInput;

    @Field(() => [AccountSessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountSessionOrderByWithRelationInput>;

    @Field(() => AccountSessionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AccountSessionWhereUniqueInput, 'id' | 'token'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AccountSessionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AccountSessionScalarFieldEnum>;
}
