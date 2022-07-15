import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia image={item.image?.url} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.text} variant='h4'>{item.name}</Typography>
        <Typography className={classes.price} variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button id="icon" type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>{item.quantity}</Typography>
          <Button id="icon" type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button id="icon" variant="contained" type="button" color="error" onClick={()=> onRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  )
}

export default CartItem