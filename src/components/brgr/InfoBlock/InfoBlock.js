import React from 'react';
import { Box, Typography } from '@mui/material';

export default function InfoBlock({ themeColors, actions, prop, styles, states }) {

    return (
        <Box
            style={{
                width: '100%',
                maxWidth: '935px',
                padding: '50px 0',
                color: styles?.InfoBlockTitleColor?.value != "" ? styles?.InfoBlockTitleColor?.value : themeColors?.InfoBlockTitleColor?.value,
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
            <Typography style={{ fontWeight: '300', fontSize: '2rem' }}>
                {prop.editable.title.value}
            </Typography>

            <Typography style={{
                color: styles?.InfoBlockDescriptionColor?.value != "" ? styles?.InfoBlockDescriptionColor?.value : themeColors?.InfoBlockTitleColor?.value,
                fontWeight: '500 ', fontSize: '14px'
            }}>
                {prop.editable.description.value}
            </Typography>
        </Box>
    );
}