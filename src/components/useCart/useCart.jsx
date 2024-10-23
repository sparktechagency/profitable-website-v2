"use client"; 

import { useState, useEffect } from "react";
const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);
  const addToCart = (item) => {
    const existingItems = JSON.parse(localStorage.getItem("cart")) || [];
    existingItems.push(item);
    localStorage.setItem("cart", JSON.stringify(existingItems));
    setCartItems(existingItems);
  };
  return { cartItems, addToCart };
};

export default useCart;
