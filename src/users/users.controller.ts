import { Controller, Get } from "@nestjs/common";
import { UserService } from "./users.service";

@Controller('users')
export class UserContoller {

    constructor(private userService: UserService) {}

    @Get('get-users')
    getUsers() {
        return this.userService.getUseers();
    }

}
