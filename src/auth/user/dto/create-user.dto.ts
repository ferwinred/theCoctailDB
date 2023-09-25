import { IsAlpha, IsEmail, IsEnum, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";
import { Roles } from "src/common/interfaces/enums";

export class CreateUserDto {

    @IsAlpha()
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

    @IsEnum(Roles)
    role: string;
}
