"use state";
import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  useMediaQuery
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { getFontSize } from "../../../utils/fontsize";

export default function ItemCard({
  item,
  actions,
  states,
  styles,
  themeColors,
  globalComponentStyles,
}) {
const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm")); 
  const getItemNameStyles = {
    color:
      styles?.AllCategoriesItemNameTextColor?.value !== ""
        ? styles?.AllCategoriesItemNameTextColor?.value
        : globalComponentStyles?.Text?.color?.value !== ""
          ? globalComponentStyles?.Text?.color?.value
          : themeColors?.AllCategoriesItemNameTextColor?.value,

    fontSize:
      getFontSize(styles?.AllCategoriesItemNameTextSize?.value != 0
        ? styles?.AllCategoriesItemNameTextSize?.value
        : globalComponentStyles?.Text?.size?.value != 0
          ? globalComponentStyles?.Text?.size?.value
          : themeColors?.AllCategoriesItemNameTextSize?.value,smDown,16),

    fontFamily:
      styles?.AllCategoriesItemNameTextFont?.value !== ""
        ? styles?.AllCategoriesItemNameTextFont?.value
        : globalComponentStyles?.Text?.fontFamily?.value !== ""
          ? globalComponentStyles?.Text?.fontFamily?.value
          : themeColors?.AllCategoriesItemNameTextFont?.value,

    fontStyle:
      styles?.AllCategoriesItemNameTextStyle?.value !== ""
        ? styles?.AllCategoriesItemNameTextStyle?.value
        : globalComponentStyles?.Text?.fontWeight?.value !== ""
          ? globalComponentStyles?.Text?.fontWeight?.value
          : themeColors?.AllCategoriesItemNameTextStyle?.value,
  };

  const getPriceTagStyles = {
    color:
      styles?.AllCategoriesPriceTagTextColor?.value !== ""
        ? styles?.AllCategoriesPriceTagTextColor?.value
        : globalComponentStyles?.Text?.color?.value !== ""
          ? globalComponentStyles?.Text?.color?.value
          : themeColors?.AllCategoriesPriceTagTextColor?.value,

    fontSize:
      getFontSize(styles?.AllCategoriesPriceTagTextSize?.value != 0
        ? styles?.AllCategoriesPriceTagTextSize?.value
        : globalComponentStyles?.Text?.size?.value != 0
          ? globalComponentStyles?.Text?.size?.value
          : themeColors?.AllCategoriesPriceTagTextSize?.value,smDown,16),
    fontFamily:
      styles?.AllCategoriesPriceTagTextFont?.value !== ""
        ? styles?.AllCategoriesPriceTagTextFont?.value
        : globalComponentStyles?.Text?.fontFamily?.value !== ""
          ? globalComponentStyles?.Text?.fontFamily?.value
          : themeColors?.AllCategoriesPriceTagTextFont?.value,

    fontStyle:
      styles?.AllCategoriesPriceTagTextStyle?.value !== ""
        ? styles?.AllCategoriesPriceTagTextStyle?.value
        : globalComponentStyles?.Text?.fontWeight?.value !== ""
          ? globalComponentStyles?.Text?.fontWeight?.value
          : themeColors?.AllCategoriesPriceTagTextStyle?.value,

    borderRadius: styles?.AllCategoriesPriceTagBorderRadius?.value !== ""
      ? styles?.AllCategoriesPriceTagBorderRadius?.value
      : themeColors?.AllCategoriesPriceTagBorderRadius?.value,

    backgroundColor: styles?.AllCategoriesPriceTagTextBackgroundcolor?.value !== ""
      ? styles?.AllCategoriesPriceTagTextBackgroundcolor?.value
      : globalComponentStyles?.Text?.backgroundColor?.value !== ""
        ? globalComponentStyles?.Text?.backgroundColor?.value
        : themeColors?.AllCategoriesPriceTagTextBackgroundcolor?.value,
  };


  const getCartAddButtonStyles = {
    color:
      styles?.AllCategoriesCartAddTextColor?.value !== ""
        ? styles?.AllCategoriesCartAddTextColor?.value
        : globalComponentStyles?.Button?.color?.value !== ""
          ? globalComponentStyles?.Button?.color?.value
          : themeColors?.AllCategoriesCartAddTextColor?.value,

    fontSize:
      getFontSize(styles?.AllCategoriesCartAddTextSize?.value != 0
        ? styles?.AllCategoriesCartAddTextSize?.value
        : globalComponentStyles?.Button?.size?.value != 0
          ? globalComponentStyles?.Button?.size?.value
          : themeColors?.AllCategoriesPriceTagTextSize?.value, smDown, 16),

    fontFamily:
      styles?.AllCategoriesCartAddTextFont?.value !== ""
        ? styles?.AllCategoriesCartAddTextFont?.value
        : globalComponentStyles?.Button?.fontFamily?.value !== ""
          ? globalComponentStyles?.Button?.fontFamily?.value
          : themeColors?.AllCategoriesCartAddTextFont?.value,

    fontStyle:
      styles?.AllCategoriesCartAddTagTextStyle?.value !== ""
        ? styles?.AllCategoriesCartAddTagTextStyle?.value
        : globalComponentStyles?.Button?.fontWeight?.value !== ""
          ? globalComponentStyles?.Button?.fontWeight?.value
          : themeColors?.AllCategoriesCartAddTagTextStyle?.value,

    borderRadius: styles?.AllCategoriesCartAddBorderRadius?.value !== ""
      ? styles?.AllCategoriesCartAddBorderRadius?.value
      : themeColors?.AllCategoriesCartAddBorderRadius?.value,

    backgroundColor: styles?.AllCategoriesCartAddBackgroundcolor?.value !== ""
      ? styles?.AllCategoriesCartAddBackgroundcolor?.value
      : globalComponentStyles?.Button?.backgroundColor?.value !== ""
        ? globalComponentStyles?.Button?.backgroundColor?.value
        : themeColors?.AllCategoriesCartAddBackgroundcolor?.value,
  };
  return (
    <>
      <Card
        sx={{
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          padding: 0,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)",
          },
        }}
        onClick={() => {
          actions.handleOpenCard();
          states.setItemForDetailedModal(item);
        }}
      >
        <CardMedia
          component="img"
          image={
            item?.photoURL
              ? `${states.storeImagesBaseUrl}/${item.photoURL}`
              : "/assets/placeholder.png"
          }
          alt={item.name}
          style={{ height: "250px", objectFit: "cover" }}
        />

        <CardContent
          sx={{
            textAlign: "center",
            flexGrow: 1, // equal height maintain
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                display: "-webkit-box",
                WebkitLineClamp: 2,   // max 2 lines
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                minHeight: "3em",     // ensure height same even if text short
                ...getItemNameStyles
              }}
            >
              {item.name}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#555",
                marginBottom: "16px",
                display: "-webkit-box",
                WebkitLineClamp: 2,   // max 2 lines for description also
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                minHeight: "3em",     // fix height for uniformity
              }}
            >
              {item.description}
            </Typography>
        </Box>

          <Box>
            <Box sx={{ marginBottom: "16px" }}>
              <Button
                disableRipple
                sx={{
                  padding: "4px 16px",
                  textTransform: "none",
                  boxShadow: "none",
                  ...getPriceTagStyles,
                }}
              >
                Rs. {item.price}
              </Button>
            </Box>

            <Button
               disableRipple
               disableElevation
              variant="contained"
              sx={{
                padding: "8px 32px",
                fontWeight: "bold",
                textTransform: "none",
                ...getCartAddButtonStyles,
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* <ItemDetailModal
        key={`categoryItem${item}`}
        open={states.openCard}
        onClose={actions.handleOpenCard}
        item={item}
        selectedQty={selectedQty}
        setSelectedQty={setSelectedQty}
        instructions={instructions}
        setInstructions={setInstructions}
        actions={actions}
        states={states}
      /> */}
    </>
  );
}
