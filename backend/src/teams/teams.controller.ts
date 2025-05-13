import { Controller, Get } from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller('team')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) {}

    @Get('list')
    async getAll() {
        return this.teamsService.getAllTeams();
    }
}
