import React from 'react';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import CategoriesRibbon from './components/CategoriesRibbon/CategoriesRibbon';
import Filters from './components/Filters/Filters';
import Products from './components/Products/Products';
import Order from './components/Order/Order';
import OrderPlaced from './components/Order/OrderPlaced';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import './styles.css';
import { setProducts, setCarouselProducts } from './features/menu/menuSlice'
import { useSelector } from "react-redux";
import { api } from './api'


export default function App() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const isOrderPlaced = useSelector((state) => state.cart.isOrderPlaced);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const getAllProducts = () => async (dispatch) => {
    try {
        const carouselProducts = await api.getCarouselProducts();
        dispatch(setCarouselProducts(carouselProducts));
        const products = await api.getProducts();
        dispatch(setProducts(products));
    } catch (error) {
        dispatch(setError(error.message));
    }
    setLoading(false);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (error) {
    return <div className="error"> {error}</div>;
  } 

  return (
    <>
      <Header/>
      <main>
          <Carousel isLoading={loading}/>
          <CategoriesRibbon/>
          <Filters/>
          <Products isLoading={loading}/>
      </main>
      {isCartOpen && <Order/>}
      {isOrderPlaced && <OrderPlaced/> }
    </>
  );
}
