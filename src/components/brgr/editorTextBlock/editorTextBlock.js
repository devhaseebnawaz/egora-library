import React from 'react';
import { Box, Typography } from '@mui/material';

export default function EditorTextBlock({ themeColors, actions, prop, styles, states, globalComponentStyles }) {

    console.log('prop',prop);
    

    return (
        <Box
            style={{
                width: '100%',
                padding: '50px 0',
                fontSize: '14px',
                margin: '0 auto',
                height: '345px',
                overflowY: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: styles?.EditorTextBlockBackgroundColor?.value != ""
                    ? styles?.EditorTextBlockBackgroundColor?.value
                    : themeColors?.EditorTextBlockBackgroundColor?.value,
            }}
        >
            <Typography>
                {prop.editable.text.value}
            </Typography>
        </Box>
    );
}