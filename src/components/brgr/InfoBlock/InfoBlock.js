import React from 'react';
import { Box, Typography } from '@mui/material';

export default function InfoBlock({ themeColors, actions, prop, styles, states, globalComponentStyles }) {

    const getInfoBlockTitleStyles = {
        color:
            styles?.InfoBlockTitleColor?.value !== ""
                ? styles?.InfoBlockTitleColor?.value
                : globalComponentStyles?.Text?.color?.value !== ""
                    ? globalComponentStyles?.Text?.color?.value
                    : themeColors?.InfoBlockTitleColor?.value,
    
        fontSize:
            styles?.InfoBlockTitleSize?.value != 0
                ? styles?.InfoBlockTitleSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.InfoBlockTitleSize?.value,
    
        fontFamily:
            styles?.InfoBlockTitleFont?.value !== ""
                ? styles?.InfoBlockTitleFont?.value
                : globalComponentStyles?.Text?.fontFamily?.value !== ""
                    ? globalComponentStyles?.Text?.fontFamily?.value
                    : themeColors?.InfoBlockTitleFont?.value,
    
        fontStyle:
            styles?.InfoBlockTitleStyle?.value !== ""
                ? styles?.InfoBlockTitleStyle?.value
                : globalComponentStyles?.Text?.fontWeight?.value !== ""
                    ? globalComponentStyles?.Text?.fontWeight?.value
                    : themeColors?.InfoBlockTitleStyle?.value,
    };

    const getInfoBlockDescriptionStyles = {
        color:
            styles?.InfoBlockDescriptionColor?.value !== ""
                ? styles?.InfoBlockDescriptionColor?.value
                : globalComponentStyles?.Text?.color?.value !== ""
                    ? globalComponentStyles?.Text?.color?.value
                    : themeColors?.InfoBlockDescriptionColor?.value,
    
        fontSize:
            styles?.InfoBlockDescriptionSize?.value != 0
                ? styles?.InfoBlockDescriptionSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.InfoBlockDescriptionSize?.value,
    
        fontFamily:
            styles?.InfoBlockDescriptionFont?.value !== ""
                ? styles?.InfoBlockDescriptionFont?.value
                : globalComponentStyles?.Text?.fontFamily?.value !== ""
                    ? globalComponentStyles?.Text?.fontFamily?.value
                    : themeColors?.InfoBlockDescriptionFont?.value,
    
        fontStyle:
            styles?.InfoBlockDescriptionStyle?.value !== ""
                ? styles?.InfoBlockDescriptionStyle?.value
                : globalComponentStyles?.Text?.fontWeight?.value !== ""
                    ? globalComponentStyles?.Text?.fontWeight?.value
                    : themeColors?.InfoBlockDescriptionStyle?.value,
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
                backgroundColor: styles?.InfoBlockBackgroundColor?.value != ""
                    ? styles?.InfoBlockBackgroundColor?.value
                    : themeColors?.InfoBlockBackgroundColor?.value,
            }}
        >
            <Typography  sx={{...getInfoBlockTitleStyles}}>
                {prop.editable.title.value}
            </Typography>

            <Typography sx={{...getInfoBlockDescriptionStyles}} >
                {prop.editable.description.value}
            </Typography>
        </Box>
    );
}