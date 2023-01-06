import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import Product from './product';
import useStyles from './productStyles';
import { deviceSize } from "../responsive";
import scrollIndi from "../../assets/scrollIndi.png";
import { useMediaQuery } from "react-responsive";


const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const ContentContainer = styled.div`
  width: 40em;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 3em 0em;
  padding: 2em 4em;
  border: 3px solid black;

  {/*Desktop*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 75vw;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
                <Grid item key={product.id} xs={12} sm={6} md={6}>
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