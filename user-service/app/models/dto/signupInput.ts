import { LoginInput } from "./loginInput";
import { Length } from "class-validator";

export class SignupInput extends LoginInput{
    @Length(10, 13)
    phone : string;
}