import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import ItemCard from "./ItemCard";

export default function PopularMenuSection({ items }) {
  
  return (
    <Box>
      <Box mb={4} mt={4}>
        <Typography
          variant="h4"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          gap={1}
        >
          Popular Items
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Most ordered right now
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {items?.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

