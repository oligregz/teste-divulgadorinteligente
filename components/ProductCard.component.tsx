"use client";

import { useDispatch } from "react-redux";
import Image from "next/image"; // 1. Importação do componente Image
import { addItem } from "../store/cartSlice";
import { IProductCardProps } from "../types/api.type";

export default function ProductCard({ product }: IProductCardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div
        id="d-product-image"
        className="relative w-full aspect-square bg-gray-50 flex items-center justify-center"
      >
        {product.coupon && (
          <span className="absolute top-2 left-2 z-10 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.coupon}
          </span>
        )}

        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain mix-blend-multiply p-4"
        />
      </div>

      <div id="d-detail-products" className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
          {product.seller}
        </span>

        <h3 className="text-sm text-gray-800 font-medium line-clamp-2 mb-3 flex-grow">
          {product.title}
        </h3>

        <div className="flex flex-col mb-4">
          {product.priceFromFormatted ? (
            <span className="text-xs text-gray-400 line-through">
              {product.priceFromFormatted}
            </span>
          ) : (
            <span className="text-xs text-transparent select-none">-</span>
          )}
          <span className="text-lg font-bold text-gray-900">
            {product.priceFormatted}
          </span>
        </div>

        <button
          id="b-action"
          onClick={handleAddToCart}
          className="w-full py-2 px-4 bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
