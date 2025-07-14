import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify-icons/mdi/map-marker";
import phoneIcon from "@iconify-icons/mdi/phone";
import cartIcon from "@iconify-icons/mdi/cart";
import CartDrawer from "./CartDrawer";
import LocationModal from "../categories/locationModal";
// import Image from 'next/image';
import UniversalImage from "../../../UniversalImage";

export default function CustomNavbar({
  themeColors,
  actions,
  prop,
  styles,
  states,
}) {
  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor:
            styles?.AppBarBackgroundColor?.value != ""
              ? styles?.AppBarBackgroundColor?.value
              : themeColors?.AppBarBackgroundColor?.value,
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
                cursor: "pointer",
              }}
              onClick={actions.handleOpenLocationModal}
            >
              <Icon
                icon={locationIcon}
                width="20"
                height="20"
                color={
                  styles?.AppBarLocationIconColor?.value != ""
                    ? styles?.AppBarLocationIconColor?.value
                    : themeColors?.AppBarLocationIconColor?.value
                }
              />
              <Box>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  style={{
                    color:
                      styles?.AppBarChangeLocationColor?.value != ""
                        ? styles?.AppBarChangeLocationColor?.value
                        : themeColors?.AppBarChangeLocationColor?.value,
                  }}
                >
                  Change Location
                  
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    color:
                      styles?.AppBarAddressColor?.value != ""
                        ? styles?.AppBarAddressColor?.value
                        : themeColors?.AppBarAddressColor?.value,
                  }}
                >
                  {states?.selectedVenue
                    ? `${states?.selectedVenue?.venueAddressOne} ${states?.selectedVenue?.venueAddressOne}`
                    : "XYZ"}
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
              <Icon
                icon={phoneIcon}
                width="20"
                height="20"
                color={
                  styles?.AppBarPhoneIconColor?.value != ""
                    ? styles?.AppBarPhoneIconColor?.value
                    : themeColors?.AppBarPhoneIconColor?.value
                }
              />
              <Typography
                variant="body2"
                fontWeight="bold"
                style={{
                  color:
                    styles?.AppBarPhoneColor?.value != ""
                      ? styles?.AppBarPhoneColor?.value
                      : themeColors?.AppBarPhoneColor?.value,
                }}
              >
                {states?.selectedVenue
                  ? states?.selectedVenue?.venuePhoneNumber
                  : "03XX-XXXXXXX"}
              </Typography>
            </Box>
          </Box>

          <Box style={{ position: "relative" }}>
            <IconButton onClick={actions.handleOpenCart}>
              <Icon
                icon={cartIcon}
                width={24}
                height={24}
                color={
                  styles?.AppBarCartIconColor?.value != ""
                    ? styles?.AppBarCartIconColor?.value
                    : themeColors?.AppBarCartIconColor?.value
                }
              />
            </IconButton>

            <CartDrawer
              open={states.openCart}
              onClose={actions.handleOpenCart}
              themeColors={themeColors}
              actions={actions}
              prop={prop}
              styles={styles}
              states={states}
            />
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
              {states?.cardItems?.items?.length || 0}
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
          {prop?.editable?.logoImage ? (
            <UniversalImage
              src={prop?.editable?.logoImage?.value}
              alt="BRGR Logo"
              layout="fill"
              objectFit="contain"
              onError={() => console.log("Image failed to load")}
              width="100%"
              height="100%"
            />
          ) : (
            <div>No logo found</div>
          )}
        </Box>
      </AppBar>
      <LocationModal
        open={states.locationModalOpen}
        handleClose={actions.handleOpenLocationModal}
        themeColors={themeColors}
        actions={actions}
        prop={prop}
        styles={styles}
        states={states}
      />
    </>
  );
}
