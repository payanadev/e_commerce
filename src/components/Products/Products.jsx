import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";

const products = [
  { id: 1, name: "P1", description: "Descripcion P1", price: " $5", image: "https://st.depositphotos.com/2466477/2802/i/450/depositphotos_28024155-stock-photo-asus-transforner-infinity-tablet-with.jpg" },
  {
    id: 2,
    name: "P2",
    description: "Descripcion P2",
    price: " $25",
    image: "https://st2.depositphotos.com/32344800/48856/i/450/depositphotos_488562166-stock-photo-machachi-ecuador-july-2021-asus.jpg",
  },
  {
    id: 3,
    name: "P3",
    description: "Descripcion P3",
    price: " $35",
    image: "https://st4.depositphotos.com/4441227/30288/i/450/depositphotos_302886416-stock-photo-22-08-2019-kyiv-ukraine.jpg",
  },
  {
    id: 4,
    name: "P4",
    description: "Descripcion P4",
    price: " $45",
    image: "https://st4.depositphotos.com/22265358/25536/i/450/depositphotos_255367982-stock-photo-april-2019-brazil-asus-logo.jpg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
