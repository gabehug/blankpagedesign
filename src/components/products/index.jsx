import React from "react";
import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core";
import { Marginer } from "../marginer";

import Product from './product';
import useStyles from './productStyles';

const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 40em;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Products = ({ products, onAddToCart}) => {
  const classes = useStyles();
  return (
    <main classsName={classes.content}>
      <Background>
        <Container>
          <h1>Prints for Sale</h1>
          <Marginer direction="vertical" margin={25}/>
          <Grid container justify="center" spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={6}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Background>
    </main>
  )
}

export default Products;