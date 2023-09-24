import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MessageUncheckedCreateNestedManyWithoutChatInput } from '../message/message-unchecked-create-nested-many-without-chat.input';
import { ChatMemberUncheckedCreateNestedManyWithoutChatInput } from '../chat-member/chat-member-unchecked-create-nested-many-without-chat.input';

@InputType()
export class ChatUncheckedCreateWithoutEventApplicationPairInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MessageUncheckedCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput;

    @Field(() => ChatMemberUncheckedCreateNestedManyWithoutChatInput, {nullable:true})
    members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput;
}
