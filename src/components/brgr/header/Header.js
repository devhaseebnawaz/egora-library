import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify-icons/mdi/map-marker";
import phoneIcon from "@iconify-icons/mdi/phone";
import cartIcon from "@iconify-icons/mdi/cart";
import CartDrawer from "./CartDrawer";
// import Image from 'next/image';
import UniversalImage from '../../../UniversalImage'

export default function CustomNavbar({ prop, themeColors, styles }) {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <AppBar
            position="static"
            style={{
                backgroundColor: themeColors?.AppBarBackgroundColor ? themeColors?.AppBarBackgroundColor :  styles?.AppBarBackgroundColor != "" ?  styles?.AppBarBackgroundColor : "#121212",
                boxShadow: "none",
                position: "relative",
                zIndex: 10,
                paddingLeft: "14px",
                paddingRight: "14px",
                paddingTop: "4px",
                paddingBottom: "4px",
            }}
        >
            <Toolbar
                style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "24px",
                    }}
                >
                    <Box
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        <Icon icon={locationIcon} width="20" height="20" color={ themeColors?.AppBarLocationIconColor ? themeColors?.AppBarLocationIconColor :  styles?.AppBarLocationIconColor != "" ?  styles?.AppBarLocationIconColor : "#f6e6d6" } />
                        <Box>
                            <Typography variant="body2" fontWeight="bold" style={{ color: themeColors?.AppBarChangeLocationColor ? themeColors?.AppBarChangeLocationColor :  styles?.AppBarChangeLocationColor != "" ?  styles?.AppBarChangeLocationColor : "#f6e6d6" }}>
                                Change Location
                            </Typography>
                            <Typography variant="caption" style={{ color: themeColors?.AppBarAddressColor ? themeColors?.AppBarAddressColor :  styles?.AppBarAddressColor != "" ?  styles?.AppBarAddressColor : "#f6e6d6" }}>
                                {prop.editable.address.value}
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        <Icon icon={phoneIcon} width="20" height="20" color={themeColors?.AppBarPhoneIconColor ? themeColors?.AppBarPhoneIconColor :  styles?.AppBarPhoneIconColor != "" ?  styles?.AppBarPhoneIconColor : "#f6e6d6" } />
                        <Typography variant="body2" fontWeight="bold" style={{ color: themeColors?.AppBarPhoneColor ? themeColors?.AppBarPhoneColor :  styles?.AppBarPhoneColor != "" ?  styles?.AppBarPhoneColor : "#f6e6d6" }}>
                            {prop.editable.phone.value}
                        </Typography>
                    </Box>
                </Box>

                <Box style={{ position: "relative" }}>
                    <IconButton onClick={() => setCartOpen(true)}>
                        <Icon icon={cartIcon} width={24} height={24} color={ themeColors?.AppBarCartIconColor ? themeColors?.AppBarCartIconColor :  styles?.AppBarCartIconColor != "" ?  styles?.AppBarCartIconColor : "#f6e6d6"} />
                    </IconButton>

                    <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
                    <Box
                        style={{
                            position: "absolute",
                            top: 2,
                            right: 2,
                            width: 18,
                            height: 20,
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: "50%",
                            border: "2px solid #f6e6d6",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        2
                    </Box>
                </Box>
            </Toolbar>

            <Box
                style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "#121212",
                }}
            >
                {prop.editable.logoImage ? (

                    <UniversalImage
                        src={prop.editable.logoImage.value}
                        alt="BRGR Logo"
                        layout="fill"
                        objectFit="contain"
                        onError={() => console.log("Image failed to load")}
                        width= "100%"
                        height= "100%"
                    />

                ) : (
                    <div>No logo found</div>
                )}
            </Box>
        </AppBar>
    );
}