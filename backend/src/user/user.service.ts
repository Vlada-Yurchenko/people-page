import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async getUsers({page = 1, limit = 10, sortBy = 'name', order = 'asc', teamIds = [], role}) {
        const skip = page || (page - 1) * limit;

        const userWhereFilter = {
            memberships: {
                some: role ? { role } : {},
            },
            ...(teamIds.length  && {
                teamLinks: {
                    some: {
                        teamId: {
                            in: teamIds,
                        },
                    },
                },
            }),
        };

        const [users, total] = await this.prisma.$transaction([
            this.prisma.user.findMany({
                where: userWhereFilter,
                include: {
                    memberships: true,
                    teamLinks: {
                        include: {
                            team: true,
                        },
                    },
                },
                skip: +skip,
                take: +limit,
                orderBy: [
                    {
                        createdAt: order,
                    },
                    {
                        [sortBy]: order
                    }],
            }),
            this.prisma.user.count({
                where: userWhereFilter,
            }),
        ]);

        return {
            data: users,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
}
