import React from 'react';
import { Box, Typography } from '@mui/material';

export default function TextBlock({ themeColors, actions, prop, styles, states, globalComponentStyles }) {

    const getTextBlockStyles = {
        color:
            styles?.TextBlockTextColor?.value !== ""
                ? styles?.TextBlockTextColor?.value
                : globalComponentStyles?.Text?.color?.value !== ""
                    ? globalComponentStyles?.Text?.color?.value
                    : themeColors?.TextBlockTextColor?.value,
    
        fontSize:
            styles?.TextBlockTextSize?.value != 0
                ? styles?.TextBlockTextSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.TextBlockTextSize?.value,
    
        fontFamily:
            styles?.TextBlockTextFont?.value !== ""
                ? styles?.TextBlockTextFont?.value
                : globalComponentStyles?.Text?.fontFamily?.value !== ""
                    ? globalComponentStyles?.Text?.fontFamily?.value
                    : themeColors?.TextBlockTextFont?.value,
    
        fontStyle:
            styles?.TextBlockTextStyle?.value !== ""
                ? styles?.TextBlockTextStyle?.value
                : globalComponentStyles?.Text?.fontWeight?.value !== ""
                    ? globalComponentStyles?.Text?.fontWeight?.value
                    : themeColors?.TextBlockTextStyle?.value,
    };

    return (
        <Box
            style={{
                width: '100%',
                maxWidth: '935px',
                padding: '50px 0',
                fontWeight: '500 !important',
                fontSize: '14px',
                margin: '0 auto',
                height: '345px',
                overflowY: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: styles?.TextBlockBackgroundColor?.value != ""
                    ? styles?.TextBlockBackgroundColor?.value
                    : themeColors?.TextBlockBackgroundColor?.value,
            }}
        >
            <Typography sx={{...getTextBlockStyles}} >
                {prop.editable.text.value}
            </Typography>
        </Box>
    );
}