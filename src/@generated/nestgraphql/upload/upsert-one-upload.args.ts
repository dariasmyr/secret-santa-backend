import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UploadWhereUniqueInput } from './upload-where-unique.input';
import { Type } from 'class-transformer';
import { UploadCreateInput } from './upload-create.input';
import { UploadUpdateInput } from './upload-update.input';

@ArgsType()
export class UpsertOneUploadArgs {

    @Field(() => UploadWhereUniqueInput, {nullable:false})
    @Type(() => UploadWhereUniqueInput)
    where!: Prisma.AtLeast<UploadWhereUniqueInput, 'id' | 'filepath'>;

    @Field(() => UploadCreateInput, {nullable:false})
    @Type(() => UploadCreateInput)
    create!: UploadCreateInput;

    @Field(() => UploadUpdateInput, {nullable:false})
    @Type(() => UploadUpdateInput)
    update!: UploadUpdateInput;
}
