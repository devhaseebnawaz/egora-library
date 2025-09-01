import React from 'react';
import { Box } from '@mui/material';

export default function Banner({ img }) {
  return (
    <Box
      sx={{
        height: { xs: 100, md: 250 },
        backgroundImage: `url(${img})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '20px',
      }}
    />
  );
}