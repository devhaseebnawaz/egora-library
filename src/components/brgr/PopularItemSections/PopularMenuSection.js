import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import ItemCard from "./ItemCard";
import ItemDetailModal from "../categories/ItemDetailModal";

export default function PopularMenuSection({ prop, actions, styles, states }) {
  const displayItems = prop?.static?.displayitems || [];
  const [products, setProducts] = useState(displayItems);
  const [item, setItem] = useState(null);
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
          }}
        >
          Popular Items
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Most ordered right now
        </Typography>
      </Box>

      {products.length === 0 ? (
        <Typography
          variant="body1"
          style={{ textAlign: "center", marginTop: 40, color: "#666" }}
        >
          No items found.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {products.map((item, index) => (
            <Grid key={item.id || item.name} item xs={12} sm={6} md={3} lg={3}>
              <ItemCard key={`popularItem${index}`} item={item} actions={actions} styles={styles} states={states}  setItem={setItem}/>
            </Grid>
          ))}
        </Grid>
      )}

      {/* { states.openCard &&  item && <ItemDetailModal
        key={`popularItem${item}`}
        item={item}
        actions={actions}
        styles={styles}
        // themeColors={themeColors}
        states={states}
      /> } */}

    </Container>
  );
}
