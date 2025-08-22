import React from 'react';
import { Box, Typography,Container,useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getFontSize } from 'src/utils/fontsize';

export default function InfoBlock({ themeColors, actions, prop, styles, states, globalComponentStyles }) {

     const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md")); 

    const getInfoBlockTitleStyles = {
        color:
            styles?.InfoBlockTitleColor?.value !== ""
                ? styles?.InfoBlockTitleColor?.value
                : globalComponentStyles?.Text?.color?.value !== ""
                    ? globalComponentStyles?.Text?.color?.value
                    : themeColors?.InfoBlockTitleColor?.value,
    
        fontSize:
            getFontSize(styles?.InfoBlockTitleSize?.value != 0
                ? styles?.InfoBlockTitleSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.InfoBlockTitleSize?.value,isMediumScreen,22),
    
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
            getFontSize(styles?.InfoBlockDescriptionSize?.value != 0
                ? styles?.InfoBlockDescriptionSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.InfoBlockDescriptionSize?.value,isMediumScreen,14),
    
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
        <Container>
        <Box
            style={{
                width: '100%',
                padding: '50px 0',
                maxWidth:'925px',
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
        </Container>
    );
}