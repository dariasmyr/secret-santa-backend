import { UseGuards } from '@nestjs/common';
import {
  Args,
  Field,
  InputType,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Group } from '@prisma/client';

import { Event } from '@/@generated/nestgraphql/event/event.model';
import { EventApplicationPair } from '@/@generated/nestgraphql/event-application-pair/event-application-pair.model';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { EventApplicationPairService } from '@/app/event-application/event-application-pair/event-application-pair.service';
import { GroupService } from '@/app/group/group.service';
import { RequestContextDecorator } from '@/app/request-context.decorator';

import { EventService } from './event.service';

@InputType()
export class CreateEventInput {
  @Field()
  groupId: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}

@Resolver(() => Event)
export class EventResolver {
  constructor(
    private readonly eventService: EventService,
    private readonly groupService: GroupService,
    private readonly eventApplicationPairService: EventApplicationPairService,
  ) {}

  @Query(() => [Event], { name: 'events' })
  @UseGuards(AuthGuard)
  async events(@Args('groupId') groupId: number): Promise<Array<Event> | null> {
    return this.eventService.getEventsByGroupId(groupId);
  }

  @Query(() => Event, { name: 'event' })
  @UseGuards(AuthGuard)
  async event(@Args('id') id: number): Promise<Event | null> {
    return this.eventService.getEventById(id);
  }

  @Mutation(() => Event, { name: 'createEvent' })
  @UseGuards(AuthGuard)
  async createEvent(@Args('input') input: CreateEventInput): Promise<Event> {
    return this.eventService.createEvent(input);
  }

  @Mutation(() => Boolean, { name: 'deleteEvent' })
  @UseGuards(AuthGuard)
  async deleteEvent(@Args('id') id: number): Promise<Event> {
    const isDeletable = await this.eventService.isEventDeletable(id);
    if (isDeletable) {
      return await this.eventService.deleteEvent(id);
    } else {
      throw new Error('Event is not deletable');
    }
  }

  @ResolveField(() => [Event], { name: 'group' })
  @UseGuards(AuthGuard)
  async group(
    @RequestContextDecorator() context: RequestContext,
    @Parent() event: Event,
  ): Promise<Group | null> {
    return this.groupService.getGroupByAccountId(
      context.account!.id,
      event.groupId,
    );
  }

  @ResolveField(() => [EventApplicationPair], { name: 'eventApplicationPairs' })
  @UseGuards(AuthGuard)
  async eventApplicationPairs(
    @Parent() event: Event,
  ): Promise<Array<EventApplicationPair> | null> {
    return this.eventApplicationPairService.getEventApplicationPairByEventId(
      event.id,
    );
  }
}
