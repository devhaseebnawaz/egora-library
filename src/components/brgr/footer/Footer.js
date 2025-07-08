import React, { useState } from "react";
import {Typography, IconButton } from "@mui/material";

// import Image from 'next/image';
import UniversalImage from "../../../UniversalImage";

export default function CustomFooter({ themeColors, actions, prop, styles, states }) {
    return (
        <div style={{ 
            backgroundColor: styles?.FooterBackgroundColor?.value || themeColors?.FooterBackgroundColor?.value,
            padding: "20px",
            textAlign: "center",
            color: styles?.FooterTextColor?.value || themeColors?.FooterTextColor?.value
        }}>
            <Typography variant="body2">
                © {new Date().getFullYear()} Egora. All rights reserved.
            </Typography>
            {/* <IconButton onClick={actions.handleOpenPrivacyPolicy}>
                <UniversalImage src="/icons/privacy-policy.svg" alt="Privacy Policy" width={24} height={24} />
            </IconButton> */}
        </div>
    );

}