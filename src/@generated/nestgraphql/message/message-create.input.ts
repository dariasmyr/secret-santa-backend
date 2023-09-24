import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateNestedOneWithoutMessagesInput } from '../account/account-create-nested-one-without-messages.input';
import { ChatCreateNestedOneWithoutMessagesInput } from '../chat/chat-create-nested-one-without-messages.input';

@InputType()
export class MessageCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => AccountCreateNestedOneWithoutMessagesInput, {nullable:false})
    account!: AccountCreateNestedOneWithoutMessagesInput;

    @Field(() => ChatCreateNestedOneWithoutMessagesInput, {nullable:true})
    chat?: ChatCreateNestedOneWithoutMessagesInput;
}
