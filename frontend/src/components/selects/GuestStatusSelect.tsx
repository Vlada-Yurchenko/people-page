import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';

interface GuestStatusSelectProps {
    isGuest: boolean;
    onGuestStatusChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const GuestStatusSelect: React.FC<GuestStatusSelectProps> = ({ isGuest, onGuestStatusChange }) => {
    return (
        <FormControl fullWidth margin="normal">
            <InputLabel id="guest-status-label">Is Guest</InputLabel>
            <Select
                labelId="guest-status-label"
                value={isGuest}
                onChange={onGuestStatusChange}
                label="Is Guest"
            >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
            </Select>
            <FormHelperText>Select if the user is a guest</FormHelperText>
        </FormControl>
    );
};

export default GuestStatusSelect;
