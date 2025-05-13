import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';

interface UserRoleSelectProps {
    userRole: string;
    onUserRoleChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const UserRoleSelect: React.FC<UserRoleSelectProps> = ({ userRole, onUserRoleChange }) => {
    return (
        <FormControl fullWidth margin="normal">
            <InputLabel id="user-role-label">User Role</InputLabel>
            <Select
                labelId="user-role-label"
                value={userRole}
                onChange={onUserRoleChange}
                label="User Role"
            >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Member">Member</MenuItem>
                <MenuItem value="Viewer">Viewer</MenuItem>
            </Select>
            <FormHelperText>Choose a user role</FormHelperText>
        </FormControl>
    );
};

export default UserRoleSelect;
