import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamsService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllTeams() {
        return this.prisma.team.findMany({
            orderBy: { name: 'asc' },
        });
    }
}
