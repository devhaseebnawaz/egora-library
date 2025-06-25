import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import ItemCard from "./ItemCard";

export default function PopularMenuSection({ prop, actions, styles, states }) {

  const [products, setProducts] = useState(prop.displayitems || []);

  const { query } = states ?? {}

  useEffect(() => {
    if (query && query.trim() !== "") {
      const filtered = prop.displayitems.filter((p) =>
        p.name.toLowerCase().includes(states.query.toLowerCase())
      );
      setProducts(filtered);
    } else {
      setProducts(prop.displayitems || []);
    }
  }, [states.query, prop.displayitems]);

  return (
    <>
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

      <Grid container spacing={2}>
        {products.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <ItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

