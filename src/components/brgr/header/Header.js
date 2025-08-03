import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify-icons/mdi/map-marker";
import { useMediaQuery } from "@mui/material";
import phoneIcon from "@iconify-icons/mdi/phone";
import cartIcon from "@iconify-icons/mdi/cart";
import CartDrawer from "./CartDrawer";
import LocationModal from "../categories/locationModal";
import UniversalImage from "../../../UniversalImage";

export default function CustomNavbar({
  themeColors,
  actions,
  prop,
  styles,
  states,
  globalComponentStyles,
  layout
}) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const truncateLength = isMobile ? 10 : 25;

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
              onClick={() => actions.handleOpenLocationModalOnClick(true)}
            >
              <Icon
                icon={locationIcon}
                width={
                  styles?.AppBarLocationIconHeightWidth?.value != ""
                    ? styles?.AppBarLocationIconHeightWidth?.value
                    : themeColors?.AppBarLocationIconHeightWidth?.value
                }
                height={
                  styles?.AppBarLocationIconHeightWidth?.value != ""
                    ? styles?.AppBarLocationIconHeightWidth?.value
                    : themeColors?.AppBarLocationIconHeightWidth?.value
                }
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
                        : globalComponentStyles?.Text?.color?.value != ""
                          ? globalComponentStyles?.Text?.color?.value :
                          themeColors?.AppBarChangeLocationColor?.value,

                    fontSize: styles?.AppBarChangeLocationTextSize?.value != 0
                      ? styles?.AppBarChangeLocationTextSize?.value
                      : themeColors?.AppBarChangeLocationTextSize?.value,

                    fontFamily: styles?.AppBarChangeLocationTextFont?.value != ""
                      ? styles?.AppBarChangeLocationTextFont?.value
                      : themeColors?.AppBarChangeLocationTextFont?.value,

                    fontStyle: styles?.AppBarChangeLocationTextStyle?.value != ""
                      ? styles?.AppBarChangeLocationTextStyle?.value
                      : themeColors?.AppBarChangeLocationTextStyle?.value,
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
                        : globalComponentStyles?.Text?.color?.value != ""
                          ? globalComponentStyles?.Text?.color?.value :
                          themeColors?.AppBarAddressColor?.value,

                    fontSize: styles?.AppBarAddressTextSize?.value != ""
                      ? styles?.AppBarAddressTextSize?.value
                      : themeColors?.AppBarAddressTextSize?.value,

                    fontFamily: styles?.AppBarAddressTextFont?.value != ""
                      ? styles?.AppBarAddressTextFont?.value
                      : themeColors?.AppBarAddressTextFont?.value,

                    fontStyle: styles?.AppBarAddressTextStyle?.value != ""
                      ? styles?.AppBarAddressTextStyle?.value
                      : themeColors?.AppBarAddressTextStyle?.value,

                  }}
                >
                  {states?.selectedVenue
                    ? actions?.handleTruncateText(`${states?.selectedVenue?.venueAddressOne} ${states?.selectedVenue?.venueAddressOne}`, truncateLength)
                    : "Address"}
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

                width={
                  styles?.AppBarPhoneIconHeightWidth?.value != ""
                    ? styles?.AppBarPhoneIconHeightWidth?.value
                    : themeColors?.AppBarPhoneIconHeightWidth?.value
                }
                height={
                  styles?.AppBarPhoneIconHeightWidth?.value != ""
                    ? styles?.AppBarPhoneIconHeightWidth?.value
                    : themeColors?.AppBarPhoneIconHeightWidth?.value
                }
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
                      : globalComponentStyles?.Text?.color?.value != ""
                        ? globalComponentStyles?.Text?.color?.value :
                        themeColors?.AppBarPhoneColor?.value,


                  fontSize: styles?.AppBarPhoneTextSize?.value != ""
                    ? styles?.AppBarPhoneTextSize?.value
                    : themeColors?.AppBarPhoneTextSize?.value,

                  fontFamily: styles?.AppBarPhoneTextFont?.value != ""
                    ? styles?.AppBarPhoneTextFont?.value
                    : themeColors?.AppBarPhoneTextFont?.value,

                  fontStyle: styles?.AppBarPhoneTextStyle?.value != ""
                    ? styles?.AppBarPhoneTextStyle?.value
                    : themeColors?.AppBarPhoneTextStyle?.value,

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

                width={
                  styles?.AppBarCartIconHeightWidth?.value != ""
                    ? styles?.AppBarCartIconHeightWidth?.value
                    : themeColors?.AppBarCartIconHeightWidth?.value
                }
                height={
                  styles?.AppBarCartIconHeightWidth?.value != ""
                    ? styles?.AppBarCartIconHeightWidth?.value
                    : themeColors?.AppBarCartIconHeightWidth?.value
                }
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
              onClick={actions.handleOpenCart}
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
        layout={layout}
        open={states.locationModalOpen}
        handleClose={actions.handleOpenLocationModal}
        themeColors={themeColors}
        actions={actions}
        prop={prop}
        styles={styles}
        states={states}
        isGoogleMapsLoaded={states?.isGoogleMapsLoaded}
      />
    
    </>
  );
}
