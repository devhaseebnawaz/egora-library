import React, { useState } from "react";
import { Typography, Box, Link } from "@mui/material";
// import Image from 'next/image';
import UniversalImage from "../../../UniversalImage";

export default function CustomFooter({ themeColors, actions, prop, styles, states }) {
    return (
        <Box
            style={{
                width: '100%',
                paddingBottom: '4rem',
                paddingTop: '4rem',
                backgroundColor: styles?.FooterBackgroundColor?.value != ""
                    ? styles?.FooterBackgroundColor?.value
                    : themeColors?.FooterBackgroundColor?.value,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: '25px 15px !important',
                minHeight: '280px',
                color: styles?.FooterTextColor?.value || themeColors?.FooterTextColor?.value
            }}
        >

            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#acacab',
                    fontSize: '14px',
                }}
            >
                <Typography
                    variant="body2"
                    component="span"

                    sx={{
                        color:
                            styles?.FooterTextColor?.value != ""
                                ? styles?.FooterTextColor?.value
                                : globalComponentStyles?.Text?.color?.value != ""
                                    ? globalComponentStyles?.Text?.color?.value :
                                    themeColors?.FooterTextColor?.value,

                        fontSize: styles?.FooterTextSize?.value != 0
                            ? styles?.FooterTextSize?.value
                            : globalComponentStyles?.Text?.size?.value != 0
                                ? globalComponentStyles?.Text?.size?.value
                                : themeColors?.FooterTextSize?.value,

                        fontFamily: styles?.FooterTextFont?.value != ""
                            ? styles?.FooterTextFont?.value
                            : globalComponentStyles?.Text?.fontFamily?.value != ""
                                ? globalComponentStyles?.Text?.fontFamily?.value
                                : themeColors?.FooterTextFont?.value,

                        fontStyle: styles?.FooterTextStyle?.value != ""
                            ? styles?.FooterTextStyle?.value
                            : globalComponentStyles?.Text?.fontWeight?.value != ""
                                ? globalComponentStyles?.Text?.fontWeight?.value
                                : themeColors?.FooterTextStyle?.value,
                    }}
                >
                    Powered by
                </Typography>
                <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    style={{ fontWeight: 'bold', color: '#acacab' }}
                >
                    Egora
                </Link>
                <Typography variant="body2" component="span">
                    |
                </Typography>
                <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    style={{ color: '#acacab' }}
                >
                    Privacy Policy
                </Link>
                <Typography variant="body2" component="span">
                    |
                </Typography>
                <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    style={{ color: '#acacab' }}
                >
                    Faqs
                </Link>
            </Box>
        </Box>
    );

}