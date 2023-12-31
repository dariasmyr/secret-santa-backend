import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupCreateInput } from './group-create.input';
import { GroupUpdateInput } from './group-update.input';

@ArgsType()
export class UpsertOneGroupArgs {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: Prisma.AtLeast<GroupWhereUniqueInput, 'id' | 'name'>;

    @Field(() => GroupCreateInput, {nullable:false})
    @Type(() => GroupCreateInput)
    create!: GroupCreateInput;

    @Field(() => GroupUpdateInput, {nullable:false})
    @Type(() => GroupUpdateInput)
    update!: GroupUpdateInput;
}
