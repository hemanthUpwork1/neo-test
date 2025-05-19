import React from 'react';
import { CircularProgress, Box } from "@mui/material";

const LoadingSpinner = () => {
    return (
        <Box
            sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 9999,
            background: '#FFFFFF'
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <CircularProgress />
        </Box>
    );
};

export default LoadingSpinner;