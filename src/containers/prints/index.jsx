import React, { useState, useEffect} from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import webBackground from "../../assets/webBackground.mp4";
import Products from "../../components/products";
import Navbar from "../../components/menu/Navbar";
import { commerce } from "../../components/lib/commerce";
import { ContactFooter } from "../../components/footer/contactFooter";
import Cart from "../../components/cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  overflow-y: visible;
  overflow-x: hidden;

  video {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const ProductsContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  margin: 8em 0em 5em 0em;
`;

export function Prints(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

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
    const { card } = await commerce.cart.remove(productId);

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }

  

  useEffect(() => {
    fetchProducts();
    FetchCart();
  }, []);

  console.log(cart);

  return (
      <PageContainer> 
        <Background>
          <video autoPlay muted loop id="backgroundVideo">
            <source src= {webBackground} type="video/mp4"/>
          </video>
          <Navbar totalItems={cart.total_items}/>
          <ProductsContainer>
          
            <Routes>
              <Route 
                path="/" 
                element={
                  <Products products={products} onAddToCart={handleAddToCart} />
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
            </Routes>
          </ProductsContainer>
          <ContactFooter />
        </Background>
      </PageContainer>
  )
}