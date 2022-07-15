import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';
import Rectangle from "../../assets/Rectangle.png";
import { Link, useLocation } from 'react-router-dom';

import useStyles from './navbarStyles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={Rectangle} alt="Blank Page Design" height="100em" className={classes.image}/>
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/prints' && (
          <div className={classes.button}>
            <IconButton id="icon" component={Link} to="/prints/cart" aria-label="Show Cart" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div> )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar