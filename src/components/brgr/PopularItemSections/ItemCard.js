import React, { useState } from "react";
import { Card, Typography, Box } from "@mui/material";
import ItemDetailModal from "../categories/ItemDetailModal";

export default function ItemCard ({ item, themeColors, styles, actions, states }) {
  const [selectedQty, setSelectedQty] = useState('0');
  const [instructions, setInstructions] = useState("");


  const fallbackImage =
    "https://brgr.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1743256920-smashsingle.jpeg%3Fq%3D10&w=640&q=75";

  return (
    <>
      <Card
        style={{
          position: "relative",
          borderRadius: 24,
          overflow: "hidden",
          textAlign: "center",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
        onClick={handleOpen}
      >
        <Box
          component="img"
          src={
            item?.photoURL
              ? `https://api.dev.egora.pk/v1/images/${item.photoURL}`
              : fallbackImage
          }
          alt={item?.name || "Menu Item"}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
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

      <ItemDetailModal

        open={states.openCard}
        onClose={actions.handleOpenCard}
        item={item}
        selectedQty={selectedQty}
        setSelectedQty={setSelectedQty}
        instructions={instructions}
        setInstructions={setInstructions}
        actions={actions}

        styles={styles}
        themeColors={themeColors}
      />
    </>
  );
};
