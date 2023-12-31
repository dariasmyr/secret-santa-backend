import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class EventApplicationPairCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Int, {nullable:false})
    eventApplicationFirstId!: number;

    @Field(() => Int, {nullable:true})
    eventApplicationSecondId?: number;

    @Field(() => Int, {nullable:true})
    chatId?: number;
}
