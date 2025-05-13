import React from 'react';
import { Box } from '@mui/material';

interface LayoutProps {
    children: React.ReactNode;
}

const Main: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box
            sx={{
                padding: 3,
                minHeight: '100vh',
                backgroundColor: '#f4f6f8',
            }}
        >
            {children}
        </Box>
    );
};

export default Main
