import { IsEmail, IsString } from "class-validator";

/**
 * @class Entity
 * @extends BaseEntity
 */
export class LoginDto {

    /** @member {string}  email - The email of the user to signin */
    @IsEmail()
    email: string;

    /** @member {string}  password - The password of the user to signin */
    @IsString()
    password: string;

}
