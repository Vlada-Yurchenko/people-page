import {IsBoolean, IsInt, IsOptional, IsString, Min, IsEnum, IsArray, IsIn } from 'class-validator';
import { ROLES } from 'common/enums/user-role.enum';

export class GetUsersDto {
    @IsOptional()
    @IsInt()
    @Min(1)
    page?: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    limit?: number;

    @IsOptional()
    @IsString()
    sortBy?: string;

    @IsOptional()
    @IsString()
    @IsIn(['asc', 'desc'])
    order?: 'asc' | 'desc';

    @IsOptional()
    @IsBoolean()
    isGuest?: boolean;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    teamIds: string[];

    @IsEnum(ROLES)
    role: ROLES
}
