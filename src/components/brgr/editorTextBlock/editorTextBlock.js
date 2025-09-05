import React from 'react';
import { Box, Typography } from '@mui/material';
import Markdown from '../../markdown';

export default function EditorTextBlock({ themeColors, actions, prop, styles, states, globalComponentStyles }) {
    return (
        <Box
            sx={{
                width: '100%',
                py: '50px',
                px: {
                    sm: '20px',
                    md: '40px',
                },
                fontSize: '14px',
                margin: '0 auto',
                overflowY: 'hidden',
                display: 'flex',
                backgroundColor: styles?.EditorTextBlockBackgroundColor?.value || themeColors?.EditorTextBlockBackgroundColor?.value,
            }}
        >
            <Typography>
                <Markdown children={prop.editable.text.value} />
            </Typography>
        </Box>
    );
}