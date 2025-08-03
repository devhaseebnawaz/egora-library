import React from 'react';
import { Box, Typography } from '@mui/material';

export default function TextBlock({ themeColors, actions, prop, styles, states }) {

    return (
        <Box
            style={{
                width: '100%',
                maxWidth: '935px',
                padding: '50px 0',
                color: styles?.TextBlockTextColor?.value != "" ? styles?.TextBlockTextColor?.value : themeColors?.TextBlockTextColor?.value,
                fontWeight: '500 !important',
                fontSize: '14px',
                margin: '0 auto',
                height: '345px',
                overflowY: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography >
                {prop.editable.text.value}
            </Typography>
        </Box>
    );
}