import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import ItemCard from "./ItemCard";

export default function PopularMenuSection({ prop, actions, styles, states }) {
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
          style={{ fontWeight: "bold", display: "flex", alignItems: "center", gap: 8 }}
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
        <Grid container spacing={2} wrap="wrap" justifyContent="center">
          {products.map((item) => (
            <Grid
              item
              key={item.id || item.name}
              style={{
                minWidth: "250px",
                maxWidth: "300px",
                flexGrow: 1,
                flexBasis: 0,
              }}
            >
              <ItemCard item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
