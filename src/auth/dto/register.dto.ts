import { IsEmail, IsEnum, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";
import { RegisterRoles } from "../../common/interfaces/enums";

/**
 * @class Entity
 * @extends BaseEntity
 */
export class RegisterDto {

    /** @member {string}  full_name - The fullname of the User to register */
    @IsString()
    @MaxLength(30)
    @MinLength(3)
    full_name: string;

    /** @member {string}  email - The email of the user to register */
    @IsEmail()
    email: string;

    /** @member {string}  password - The password of the user to register */
    @IsString()
    @MinLength(8)
    @MaxLength(50)
    password: string;

    /** @member {string}  phone - The phone number of the user to register */
    @IsPhoneNumber()
    @MaxLength(15)
    @MinLength(9)
    phone: string;

    /** @member {string}  role - The role of the user to register */
    @IsEnum(RegisterRoles)
    role: string;
}
