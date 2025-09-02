import React from 'react';
import { Box } from '@mui/material';

export default function Banner({ img }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto', 
        maxHeight: { xs: 100, md: 300 },
        minHeight: { xs: 100, md: 300 }, 
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '20px',
        margin: '20px 0',
      }}
    />
  );
}