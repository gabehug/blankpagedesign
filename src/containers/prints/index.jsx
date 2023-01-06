import React, { useState, useEffect} from "react";
import styled from "styled-components";
import Products from "../../components/products";
import Navbar from "../../components/menu/Navbar";
import Cart from "../../components/cart";
import Checkout from "../../components/checkoutForm/checkout/checkout";
import { PageContainer } from "../../components/pageContainer";
import { commerce } from "../../components/lib/commerce";
import { ContactFooter } from "../../components/footer/contactFooter";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { deviceSize } from "../../components/responsive";


const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow-y: scroll;
  overflow-y: visible;
  overflow-x: hidden;
`;

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0em 0em 3em 0em;

`;

const ProductsContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  margin: 0em 0em 5em 0em;

`;

const theme = createTheme({
  typography: {
    fontFamily: [
      "futura",
      "sans-serif",
    ],
    caption: {
      lineHeight: '4px',
      letterSpacing: "0.04em",
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#343B33'
    },
    secondary: {
      main: '#A39450'
    },
  },
});

export function Prints(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const FetchCart = async () => {
    setCart(await commerce.cart.retrieve());

  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
    FetchCart();
  }, []);

  return (
      <PageContainer> 
        <ThemeProvider theme={theme}>
          <Background>
            <OuterContainer>
            <Navbar totalItems={cart.total_items}/>
            <ProductsContainer>
              <Routes>
                <Route 
                  path="/" 
                  element={<Products products={products} onAddToCart={handleAddToCart} />
                  }/>
                <Route 
                  path="cart"
                  element={
                  <Cart 
                    cart= {cart} 
                    handleUpdateCartQty= {handleUpdateCartQty}
                    handleRemoveFromCart= {handleRemoveFromCart}
                    handleEmptyCart= {handleEmptyCart}
                  />
                }/>
                <Route 
                  path="/cart/checkout"
                  element={
                    <Checkout 
                      cart={cart}
                      order={order}
                      onCaptureCheckout={handleCaptureCheckout}
                      error={errorMessage}
                      />
                  }/>
              </Routes>
            </ProductsContainer>
            </OuterContainer>
            <ContactFooter />
          </Background>
        </ThemeProvider>
      </PageContainer>
  )
}