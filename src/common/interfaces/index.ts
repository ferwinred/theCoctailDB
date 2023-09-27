import { User } from "src/auth/user/entities/user.entity";

export interface RequestWithUser extends Request{
    user: User
}