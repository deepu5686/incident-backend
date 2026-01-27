import { Module } from "@nestjs/common";
import { UserContoller } from "./users.controller";
import { UserService } from "./users.service";

@Module({
    controllers: [UserContoller],
    providers: [UserService]
})
 
export class UserModule {}