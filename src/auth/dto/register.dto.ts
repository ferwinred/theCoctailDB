import { IsAlpha, IsEmail, IsEnum, IsPhoneNumber, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator";
import { Roles } from "src/common/interfaces/enums";

export class RegisterDto {

    @IsAlpha()
    @MaxLength(30)
    @MinLength(3)
    full_name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    @MinLength(8)
    @MaxLength(50)
    password: string;

    @IsPhoneNumber()
    @MaxLength(15)
    @MinLength(9)
    phone: string;

    @IsEnum(Roles)
    role: string;
}
