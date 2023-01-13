import React from 'react';
import { AppBar, Toolbar, IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { deviceSize } from '../../components/responsive';
import { useMediaQuery } from "react-responsive";

import useStyles from './navbarStyles';
import DropdownMenu from './dropdownMenu';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar>
        <DropdownMenu className={classes.image}/>
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

export default Navbar;