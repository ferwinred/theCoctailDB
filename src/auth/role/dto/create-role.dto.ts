import { IsEnum, MaxLength, MinLength } from "class-validator";
import { ERole } from "../../../common/interfaces/enums";

export class CreateRoleDto {
    
    @IsEnum(ERole)
    @MaxLength(30)
    @MinLength(3)
    name: string;
    
}
