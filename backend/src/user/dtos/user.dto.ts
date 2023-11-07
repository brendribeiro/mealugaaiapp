import { IsString } from "class-validator";

export class UserDTO {
    @IsString()
    id: string;

    @IsString()
    username: string;

    @IsString()
    hash: string;
}