import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupWhereInput } from './group-where.input';
import { Type } from 'class-transformer';
import { GroupOrderByWithRelationInput } from './group-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GroupScalarFieldEnum } from './group-scalar-field.enum';

@ArgsType()
export class FindFirstGroupArgs {

    @Field(() => GroupWhereInput, {nullable:true})
    @Type(() => GroupWhereInput)
    where?: GroupWhereInput;

    @Field(() => [GroupOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GroupOrderByWithRelationInput>;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GroupWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GroupScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GroupScalarFieldEnum>;
}
