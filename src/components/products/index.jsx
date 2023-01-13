import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import Product from './product';
import useStyles from './productStyles';
import { deviceSize } from "../responsive";


const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const ContentContainer = styled.div`
  width: 90vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3em 0em -1.5em 0em;
  border: 3px solid black;

  {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.tablet}px) {
      width: 85vw;
    }

`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
`;


const Products = ({ products, onAddToCart}) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Background>
        <ContentContainer>
          <Container>
            <h1>Prints for Sale</h1>
            <Grid container justify="center" spacing={4}>
              {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={6} lg={4}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </ContentContainer>
      </Background>
    </main>
  )
}

export default Products;