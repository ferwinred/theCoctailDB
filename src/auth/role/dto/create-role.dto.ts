import { IsEnum, MaxLength, MinLength } from "class-validator";
import { Roles } from "src/common/interfaces/enums";

export class CreateRoleDto {
    
    @IsEnum(Roles)
    @MaxLength(30)
    @MinLength(3)
    name: string;
    
}
