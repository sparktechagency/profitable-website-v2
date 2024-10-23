"use client"; // Add this line to make this a Client Component

import React from "react";
import Image from "next/image";
import useCart from "@/components/useCart/useCart"; // Custom hook import

export default function Cart() {
  const { cartItems } = useCart(); // Get cart items using custom hook

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-8">
          {/* Cart Items Table */}
          <div className="w-full rounded-lg ">
            <table className="min-w-full table-auto text-left">
              <thead className="shadow ">
                <tr>
                  <th className="py-4 pl-2">Product</th>
                  <th className="py-4">Price</th>
                  <th className="py-4 ">Quantity</th>
                  <th className="py-4 ">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="shadow mt-4">
                    <td className="py-4 flex items-center">
                      <Image src={item.img} alt={item.title} width={80} height={80} className="mr-4" />
                      <span>{item.title}</span>
                    </td>
                    <td className="py-4">${item.price}</td>
                    <td className="py-4">
                      <select
                        value={item.quantity}
                        className="border bg-white border-gray-300 rounded-lg p-2"
                        readOnly
                      >
                        {[...Array(10).keys()].map((i) => (
                          <option key={i} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-4">${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button className="border border-gray-500 text-gray-500 px-4 py-2 rounded">Return To Shop</button>
              <button className="border border-gray-500 text-gray-500 px-4 py-2 rounded">Update Cart</button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="w-full border border-gray-300 rounded p-4">
            <h2 className="text-xl font-bold mb-4">Cart Total</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${totalPrice}</span>
            </div><hr />
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div><hr />
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-center">
            <button className="bg-[#fe6201] text-white px-11 py-2 rounded">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
