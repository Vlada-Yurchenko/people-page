import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText, Chip } from '@mui/material';

interface TeamSelectProps {
    teams: { id: string; name: string }[];
    selectedTeams: string[];
    onTeamsChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const TeamSelect: React.FC<TeamSelectProps> = ({ teams, selectedTeams, onTeamsChange }) => {
    return (
        <FormControl fullWidth margin="normal">
            <InputLabel id="teams-label">Teams</InputLabel>
            <Select
                labelId="teams-label"
                multiple
                value={selectedTeams}
                onChange={onTeamsChange}
                renderValue={(selected) => (
                    <div>
                        {selected.map((teamId) => {
                            const team = teams.find((team) => team.id === teamId);
                            return <Chip key={teamId} label={team?.name} />;
                        })}
                    </div>
                )}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 200,
                            width: 250,
                        },
                    },
                }}
            >
                {teams.map((team) => (
                    <MenuItem key={team.id} value={team.id}>
                        {team.name}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>Select teams for the user</FormHelperText>
        </FormControl>
    );
};

export default TeamSelect;

