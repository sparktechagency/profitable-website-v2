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

  const removeFromWish = (itemId) => {
    const updatedItems = wishItems.filter((item) => item.id !== itemId);
    localStorage.setItem("wish", JSON.stringify(updatedItems));
    setwishItems(updatedItems);
  };

  return { wishItems, addToWish, removeFromWish };
};

export default useWish;
