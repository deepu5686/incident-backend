import { Module } from "@nestjs/common";
import{ AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PrismaService } from "../../prisma/prisma.service";
import { PassportModule } from "@nestjs/passport";
import { ConfigModule } from "@nestjs/config";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    providers: [AuthService, PrismaService, ConfigModule, PassportModule, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}