import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventStatus } from '../prisma/event-status.enum';
import { EventApplicationPairCreateNestedManyWithoutEventInput } from '../event-application-pair/event-application-pair-create-nested-many-without-event.input';

@InputType()
export class EventCreateWithoutGroupInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    pictureUrl!: string;

    @Field(() => EventStatus, {nullable:false})
    status!: keyof typeof EventStatus;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    startsAt!: Date | string;

    @Field(() => Date, {nullable:false})
    endsAt!: Date | string;

    @Field(() => EventApplicationPairCreateNestedManyWithoutEventInput, {nullable:true})
    applicationPairs?: EventApplicationPairCreateNestedManyWithoutEventInput;
}
