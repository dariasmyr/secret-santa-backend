import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AccountRole } from '../prisma/account-role.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { AccountSessionUncheckedCreateNestedManyWithoutAccountInput } from '../account-session/account-session-unchecked-create-nested-many-without-account.input';
import { ExternalProfileUncheckedCreateNestedManyWithoutAccountInput } from '../external-profile/external-profile-unchecked-create-nested-many-without-account.input';
import { GroupMemberUncheckedCreateNestedManyWithoutAccountInput } from '../group-member/group-member-unchecked-create-nested-many-without-account.input';
import { EventApplicationUncheckedCreateNestedManyWithoutAccountInput } from '../event-application/event-application-unchecked-create-nested-many-without-account.input';
import { NotificationUncheckedCreateNestedManyWithoutAccountInput } from '../notification/notification-unchecked-create-nested-many-without-account.input';
import { ChatMemberUncheckedCreateNestedManyWithoutAccountInput } from '../chat-member/chat-member-unchecked-create-nested-many-without-account.input';

@InputType()
export class AccountUncheckedCreateWithoutMessagesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Boolean, {nullable:true})
    isNotificationsEnabled?: boolean;

    @Field(() => [AccountRole], {nullable:true})
    roles?: Array<keyof typeof AccountRole>;

    @Field(() => AccountStatus, {nullable:false})
    status!: keyof typeof AccountStatus;

    @Field(() => String, {nullable:true})
    avatarUrl?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => AccountSessionUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    sessions?: AccountSessionUncheckedCreateNestedManyWithoutAccountInput;

    @Field(() => ExternalProfileUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    externalProfiles?: ExternalProfileUncheckedCreateNestedManyWithoutAccountInput;

    @Field(() => GroupMemberUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutAccountInput;

    @Field(() => EventApplicationUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    eventApplications?: EventApplicationUncheckedCreateNestedManyWithoutAccountInput;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    notifications?: NotificationUncheckedCreateNestedManyWithoutAccountInput;

    @Field(() => ChatMemberUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    chatMembers?: ChatMemberUncheckedCreateNestedManyWithoutAccountInput;
}
