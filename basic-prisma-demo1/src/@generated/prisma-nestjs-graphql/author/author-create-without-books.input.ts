import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class AuthorCreateWithoutBooksInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;
}
