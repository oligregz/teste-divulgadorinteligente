"use client";

import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { RootState } from "../store/store";
import { removeItem, clearCart } from "../store/cartSlice";
import { ICartDrawerProps } from "@/types/api.type";

export default function CartDrawer({ isOpen, onClose }: ICartDrawerProps) {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);

  if (!isOpen) return null;

  return (
    <>
      <div
        id="d-background-overlay"
        className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
        onClick={onClose}
      />

      <div
        id="d-side-cart-panel"
        className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-white shadow-xl flex flex-col animate-slide-in-right"
      >
        <div
          id="d-cart-header"
          className="flex items-center justify-between p-4 border-b border-gray-200"
        >
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.124a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div
          id="d-items-list"
          className="flex-1 overflow-y-auto p-4 flex flex-col gap-4"
        >
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-gray-50 p-3 rounded-lg border border-gray-100"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain rounded bg-white shrink-0"
                />
                <div className="flex-1 flex flex-col">
                  <span className="text-sm font-medium text-gray-800 line-clamp-2">
                    {item.title}
                  </span>
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </span>
                    <span className="font-bold text-teal-700">
                      R${" "}
                      {(item.priceNumeric * item.quantity)
                        .toFixed(2)
                        .replace(".", ",")}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-red-500 hover:text-red-700 self-start p-1"
                  title="Remove item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div
            id="d-cart-footer"
            className="p-4 border-t border-gray-200 bg-gray-50"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Total:</span>
              <span className="text-xl font-bold text-gray-900">
                R$ {totalAmount.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(clearCart())}
                className="w-1/3 py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
              >
                Clear
              </button>
              <button className="w-2/3 py-2 px-4 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-semibold transition-colors">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
