import { IsEmail, IsEnum, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";
import { ERole } from "../../../common/interfaces/enums";

export class CreateUserDto {

    @IsString()
    @MaxLength(30)
    @MinLength(3)
    full_name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MaxLength(30)
    @MinLength(8)
    password: string;

    @IsPhoneNumber()
    @MinLength(9)
    @MaxLength(15)
    phone: string;

    @IsEnum(ERole)
    role: string;
}
