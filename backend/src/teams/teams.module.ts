import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import {PrismaModule} from '../prisma/prisma.module';

@Module({
  providers: [TeamsService],
  controllers: [TeamsController],
  imports: [PrismaModule]
})
export class TeamsModule {}
