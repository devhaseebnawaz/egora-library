import React, { useState, useEffect } from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import { categories } from "../data/categories";
import Banner from "./Banner";
import CategoryLayout from "./CategoryLayout";
import ItemCard from "./ItemCard";

export default function AllCategoriesPage({ prop, actions, styles, states }) {

  const [products, setProducts] = useState(prop.static.displaycategories || []);

  const { query } = states ?? {}

  
  useEffect(() => {
    if (query && query.trim() !== "") {
      const filtered = prop.static.displaycategories.filter((p) =>
        p.name.toLowerCase().includes(states.query.toLowerCase())
      );
      setProducts(filtered);
    } else {
      setProducts(prop.static.displaycategories || []);
    }
  }, [states.query, prop.static.displaycategories]);


  return (
    <>
      <Container style={{ marginTop: "30px" }} >
        {products.map((category) => (
          <Box key={category.id} style={{ margin: "48px 0px" }}>
            <CategoryLayout
            // banner={<Banner img={category.bannerImg} />}
            >
              <Typography variant="h3" style={{ marginBottom: "16px" }}>
                {category.name}
              </Typography>

              <Grid container spacing={2}>
                {category.items.map((item, index) => (
                  <Grid item xs={12} sm={6} md={3} key={`categoryItem${item.id}`}>
                    <ItemCard key={`categoryItem${index}item`} item={item} actions={actions} states={states}/>
                  </Grid>
                ))}
              </Grid>
            </CategoryLayout>
          </Box>
        ))}
      </Container>
    </>
  );
}
