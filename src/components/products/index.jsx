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
  justify-content: flex-start;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    margin: 5em 0em 0em 1em;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0em 0em 3em 0em;

{/*Mobile*/}
@media screen and (max-width: ${deviceSize.mobile}px) {
  flex-direction: row;
  margin: 0em 0em 2em 0em;
  justify-content: start;
}
`;

const Container = styled.div`
  width: 40em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;

  {/*Desktop*/}
  @media screen and (max-width: ${deviceSize.desktop}px) {
    padding: 2em;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      h1 {
        margin-top: -2em;
      }
    }
`;

const ScrollContainer = styled.div`
  width: 3em;
  height: 3em;
  position: sticky;
  top: 55em;
  right: 5em;
  img {
    transform: rotate(90deg);
    width: 3em;
    height: 3em;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      right: 0;
      img {
        width: 2em;
        height: 2em;
      }
    }
`;

const Products = ({ products, onAddToCart}) => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const classes = useStyles();
  return (
    <main classsName={classes.content}>
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
        {!isMobile &&(
        <ScrollContainer>
            <img src={scrollIndi} alt="Scroll Indicator"></img>
          </ScrollContainer>
          )}
      </Background>
    </main>
  )
}

export default Products;