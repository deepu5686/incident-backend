import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma/prisma.client';

@Injectable()
export class UserService {

    getUseers() {
        return prisma.user.findMany();
    }

}