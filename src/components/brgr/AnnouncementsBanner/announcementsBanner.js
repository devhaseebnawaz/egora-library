import React from 'react';
import { Box, Typography } from '@mui/material';

export default function AnnouncementsBanner({ themeColors, actions, prop, styles, states, globalComponentStyles }) {

    const getTextBlockStyles = {
        color:
            styles?.AnnouncementsBannerTextColor?.value !== ""
                ? styles?.AnnouncementsBannerTextColor?.value
                : globalComponentStyles?.Text?.color?.value !== ""
                    ? globalComponentStyles?.Text?.color?.value
                    : themeColors?.AnnouncementsBannerTextColor?.value,
    
        fontSize:
            styles?.AnnouncementsBannerTextSize?.value != 0
                ? styles?.AnnouncementsBannerTextSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.AnnouncementsBannerTextSize?.value,
    
        fontFamily:
            styles?.AnnouncementsBannerTextFont?.value !== ""
                ? styles?.AnnouncementsBannerTextFont?.value
                : globalComponentStyles?.Text?.fontFamily?.value !== ""
                    ? globalComponentStyles?.Text?.fontFamily?.value
                    : themeColors?.AnnouncementsBannerTextFont?.value,
    
        fontStyle:
            styles?.AnnouncementsBannerTextStyle?.value !== ""
                ? styles?.AnnouncementsBannerTextStyle?.value
                : globalComponentStyles?.Text?.fontWeight?.value !== ""
                    ? globalComponentStyles?.Text?.fontWeight?.value
                    : themeColors?.AnnouncementsBannerTextStyle?.value,
    };

    return (
        <Box
            style={{
                width: '100%',
                padding: '5px 0',
                fontWeight: '500 !important',
                fontSize: '14px',
                margin: '0 auto',
                height: '30px',
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