import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import { Marginer } from '../marginer';

import useStyles from './styles';

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
          <Grid item xs={12} sm={6} lg={4} key={item.id}> 
            <CartItem  item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button id="icon" className={classes.emptyButton} size="large" type="button" variant="outlined" color="primary" onClick={handleEmptyCart}>Empty Cart</Button>
            <Button id="icon" component={Link} to="checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="secondary">Checkout</Button>
          </div>
      </div>
    </>
  );
  
  if(!cart.line_items) return 'Loading...';

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant='h3' gutterBottom>Shopping Cart</Typography>
      <Marginer direction="vertical" margin={10}/>
      <Button id="icon" href="/prints" className={classes.toPrintsButton} size="medium" type="button" variant="outlined" color="primary">Add more prints</Button>    
      <Marginer direction="vertical" margin={25}/>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
    </Container>
  )
}

export default Cart;