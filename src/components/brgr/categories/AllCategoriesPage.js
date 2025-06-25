import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import { categories } from "../data/categories";
import Banner from "./Banner";
import CategoryLayout from "./CategoryLayout";
import ItemCard from "./ItemCard";

export default function AllCategoriesPage({ prop, actions, styles, states  }) {

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
      {products.map((category) => (
        <Box key={category.id} style={{ margin: "48px 0px" }}>
          <CategoryLayout
          // banner={<Banner img={category.bannerImg} />}
          >
            <Typography variant="h3" style={{ marginBottom: "16px" }}>
              {category.title}
            </Typography>

            <Grid container spacing={2}>
              {category.items.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                  <ItemCard item={item} />
                </Grid>
              ))}
            </Grid>
          </CategoryLayout>
        </Box>
      ))}
    </>
  );
}
