import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateOneRequiredWithoutApplicationPairsNestedInput } from '../event/event-update-one-required-without-application-pairs-nested.input';
import { EventApplicationUpdateOneRequiredWithoutEventApplicationFirstPairsNestedInput } from '../event-application/event-application-update-one-required-without-event-application-first-pairs-nested.input';
import { ChatUpdateOneRequiredWithoutEventApplicationPairNestedInput } from '../chat/chat-update-one-required-without-event-application-pair-nested.input';

@InputType()
export class EventApplicationPairUpdateWithoutApplicationSecondInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EventUpdateOneRequiredWithoutApplicationPairsNestedInput, {nullable:true})
    event?: EventUpdateOneRequiredWithoutApplicationPairsNestedInput;

    @Field(() => EventApplicationUpdateOneRequiredWithoutEventApplicationFirstPairsNestedInput, {nullable:true})
    applicationFirst?: EventApplicationUpdateOneRequiredWithoutEventApplicationFirstPairsNestedInput;

    @Field(() => ChatUpdateOneRequiredWithoutEventApplicationPairNestedInput, {nullable:true})
    chat?: ChatUpdateOneRequiredWithoutEventApplicationPairNestedInput;
}
