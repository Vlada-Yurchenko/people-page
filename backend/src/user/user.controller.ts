import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { GetUsersDto } from 'common/dto/get-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('list')
    async getUsers(@Query() query: GetUsersDto) {
        return this.userService.getUsers(query);
    }
}
