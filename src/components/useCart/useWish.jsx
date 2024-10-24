"use client"; 

import { useState, useEffect } from "react";
const useWish = () => {
  const [wishItems, setwishItems] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wish")) || [];
    setwishItems(items);
  }, []);
  const addToWish = (item) => {
    const existingItems = JSON.parse(localStorage.getItem("wish")) || [];
    existingItems.push(item);
    localStorage.setItem("wish", JSON.stringify(existingItems));
    setwishItems(existingItems);
  };
  return { wishItems, addToWish };
};

export default useWish;
