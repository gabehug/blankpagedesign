import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Marginer } from "../marginer";

import Product from './product';
import useStyles from './productStyles';

const Products = ({ products, onAddToCart}) => {
  const classes = useStyles();
  return (
    <main classsName={classes.content}>
      <div className={classes.toolbar} />
      <Marginer direction="vertical" margin={25}/>
      <Typography className={classes.title} variant='h3' gutterBottom>Prints for sale</Typography>
      <Marginer direction="vertical" margin={25}/>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={6} lg={4}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products;