import React from 'react'
import styled from 'styled-components';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import { Marginer } from '../marginer';

import useStyles from './styles';
import { deviceSize } from '../responsive';

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

`;

const ContentContainer = styled.div`
  width: 90vw;
  height: 100%;
  min-height: 13em;
  margin: 6em 0em 0em 0em;
  border: 3px solid black;

  @media screen and (min-width: ${deviceSize.tablet}px) {
    width: 85vw;
  }

`;

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      There are no items in your cart.
      </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} m={6} key={item.id}> 
            <CartItem  item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
          <h2>Subtotal: {cart.subtotal.formatted_with_symbol}</h2>
          <div>
            <Button id="icon" className={classes.emptyButton} size="large" type="button" variant="outlined" color="primary" onClick={handleEmptyCart}>Empty Cart</Button>
            <Button id="icon" component={Link} to="checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="secondary">Checkout</Button>
          </div>
      </div>
    </>
  );
  
  if(!cart.line_items) return 'Loading...';

  return (
    <Background>
      <ContentContainer>
        <Container>
          <h1>Shopping Cart</h1>
          <Marginer direction="vertical" margin={10}/>
          <Button id="icon" href="/prints" className={classes.toPrintsButton} size="medium" type="button" variant="outlined" color="primary">Add more prints</Button>    
          <Marginer direction="vertical" margin={25}/>
          { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    </ContentContainer>
    </Background>
  )
}

export default Cart;