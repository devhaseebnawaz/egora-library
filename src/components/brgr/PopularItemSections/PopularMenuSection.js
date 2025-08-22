import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Container ,useMediaQuery} from "@mui/material";
import ItemCard from "./ItemCard";
import ItemDetailModal from "../categories/ItemDetailModal";
import { useTheme } from '@mui/material/styles';
import { getFontSize } from "../../../utils/fontsize";

export default function PopularMenuSection({ prop, actions, styles, states, themeColors, globalComponentStyles }) {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md")); 
  const displayItems = prop?.static?.displayitems || [];
  const [products, setProducts] = useState(displayItems);
  const { query } = states ?? {};

  useEffect(() => {
    if (query && query.trim() !== "") {
      const filtered = displayItems.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(filtered);
    } else {
      setProducts(displayItems);
    }
  }, [query, displayItems]);

  return (
    <Container style={{ marginTop: "30px" }}>
      <Box mb={4} mt={4}>
        <Typography
          variant="h4"
          style={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 8,


            color: styles?.PopularMenuSectionHeadingTextColor?.value != ""
              ? styles?.PopularMenuSectionHeadingTextColor?.value
              : globalComponentStyles?.Text?.color?.value != ""
                ? globalComponentStyles?.Text?.color?.value :
                themeColors?.PopularMenuSectionHeadingTextColor?.value,

            fontSize: getFontSize(styles?.PopularMenuSectionHeadingTextSize?.value != ""
              ? styles?.PopularMenuSectionHeadingTextSize?.value
              : globalComponentStyles?.Text?.size?.value != ""
                ? globalComponentStyles?.Text?.size?.value :
                themeColors?.PopularMenuSectionHeadingTextSize?.value,mdDown,20),

            fontFamily: styles?.PopularMenuSectionHeadingTextFont?.value != ""
              ? styles?.PopularMenuSectionHeadingTextFont?.value
              : globalComponentStyles?.Text?.fontFamily?.value != ""
                ? globalComponentStyles?.Text?.fontFamily?.value :
                themeColors?.PopularMenuSectionHeadingTextFont?.value,

            fontStyle: styles?.PopularMenuSectionHeadingTextStyle?.value != ""
              ? styles?.PopularMenuSectionHeadingTextStyle?.value
              : globalComponentStyles?.Text?.fontWeight?.value != ""
                ? globalComponentStyles?.Text?.fontWeight?.value :
                themeColors?.PopularMenuSectionHeadingTextStyle?.value,

          }}
        >
          {prop?.editable?.title?.value}
        </Typography>
        <Typography variant="subtitle1"  style={{

           color: styles?.PopularMenuSectionDescriptionTextColor?.value != ""
           ? styles?.PopularMenuSectionDescriptionTextColor?.value
           : globalComponentStyles?.Text?.color?.value != ""
             ? globalComponentStyles?.Text?.color?.value :
             themeColors?.PopularMenuSectionDescriptionTextColor?.value,

         fontSize:getFontSize(styles?.PopularMenuSectionDescriptionTextSize?.value != ""
           ? styles?.PopularMenuSectionDescriptionTextSize?.value
           : globalComponentStyles?.Text?.size?.value != ""
             ? globalComponentStyles?.Text?.size?.value :
             themeColors?.PopularMenuSectionDescriptionTextSize?.value,mdDown,16),

         fontFamily: styles?.PopularMenuSectionDescriptionTextFont?.value != ""
           ? styles?.PopularMenuSectionDescriptionTextFont?.value
           : globalComponentStyles?.Text?.fontFamily?.value != ""
             ? globalComponentStyles?.Text?.fontFamily?.value :
             themeColors?.PopularMenuSectionDescriptionTextFont?.value,

         fontStyle: styles?.PopularMenuSectionDescriptionTextStyle?.value != ""
           ? styles?.PopularMenuSectionDescriptionTextStyle?.value
           : globalComponentStyles?.Text?.fontWeight?.value != ""
             ? globalComponentStyles?.Text?.fontWeight?.value :
             themeColors?.PopularMenuSectionDescriptionTextStyle?.value,

        }}>
          {prop?.editable?.description?.value}
        </Typography>
      </Box>

      {products.length === 0 ? (
        <Typography
          variant="body1"
          style={{ textAlign: "center", marginTop: 40, 
          
          color: styles?.PopularMenuSectionDescriptionTextColor?.value != ""
          ? styles?.PopularMenuSectionDescriptionTextColor?.value
          : globalComponentStyles?.Text?.color?.value != ""
            ? globalComponentStyles?.Text?.color?.value :
            themeColors?.PopularMenuSectionDescriptionTextColor?.value,

        fontSize: getFontSize(styles?.PopularMenuSectionDescriptionTextSize?.value != ""
          ? styles?.PopularMenuSectionDescriptionTextSize?.value
          : globalComponentStyles?.Text?.size?.value != ""
            ? globalComponentStyles?.Text?.size?.value :
            themeColors?.PopularMenuSectionDescriptionTextSize?.value,mdDown,20),

        fontFamily: styles?.PopularMenuSectionDescriptionTextFont?.value != ""
          ? styles?.PopularMenuSectionDescriptionTextFont?.value
          : globalComponentStyles?.Text?.fontFamily?.value != ""
            ? globalComponentStyles?.Text?.fontFamily?.value :
            themeColors?.PopularMenuSectionDescriptionTextFont?.value,

        fontStyle: styles?.PopularMenuSectionDescriptionTextStyle?.value != ""
          ? styles?.PopularMenuSectionDescriptionTextStyle?.value
          : globalComponentStyles?.Text?.fontWeight?.value != ""
            ? globalComponentStyles?.Text?.fontWeight?.value :
            themeColors?.PopularMenuSectionDescriptionTextStyle?.value,
        }}
        >
          No items found.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {products.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={3} lg={3}>
              <ItemCard key={index} item={item} actions={actions} styles={styles} states={states} globalComponentStyles={globalComponentStyles} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
