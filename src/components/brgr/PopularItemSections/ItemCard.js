import React, { useState } from "react";
import { Card, Typography, Box } from "@mui/material";
import ItemDetailModal from "../categories/ItemDetailModal";

export default function ItemCard ({ item, themeColors, styles, actions, states }) {
 
  return (
    <>
      <Card
        sx={{
          position: "relative",
          borderRadius: 3,
          overflow: "hidden",
          textAlign: "center",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
          },
        }}
        onClick={() => {
          actions.handleOpenCard();
          states.setItemForDetailedModal(item);
        }}
      >
        <Box
          component="img"
          src={
            item?.photoURL
              ? `${states.storeImagesBaseUrl}/${item.photoURL}`
              : '/assets/placeholder.png'
          }
          alt={item?.name || "Menu Item"}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/assets/placeholder.png'
          }}
          sx={{
            width: "100%",
            objectFit: "cover",
            aspectRatio: "1 / 1",
            height: {
              sm:"270px",
            },
          }}
        />

        <Typography
          variant="subtitle1"
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            zIndex: 2,
            fontWeight: "bold",
            color: themeColors?.ItemCardItemNameColor ? themeColors?.ItemCardItemNameColor : styles?.ItemCardItemNameColor != "" ? styles?.ItemCardItemNameColor : "#fff",
            textShadow: "0 1px 3px rgba(0,0,0,0.6)",
          }}
        >
          {item?.name}
        </Typography>

        <Box
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            backgroundColor: themeColors?.ItemCardItemPriceBackgroundColor ? themeColors?.ItemCardItemPriceBackgroundColor : styles?.ItemCardItemPriceBackgroundColor != "" ? styles?.ItemCardItemPriceBackgroundColor : "#fff",
            padding: "4px 12px",
            borderRadius: 20,
            fontWeight: 600,
            fontSize: 14,
            boxShadow: "rgba(0, 0, 0, 0.14) 0px 1px 4px",
          }}
        >
          Rs. {item?.price}
        </Box>
      </Card>
    </>
  );
};
