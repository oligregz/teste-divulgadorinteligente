import Link from "next/link";
import { ICoupon } from "../types/api.type";

interface ICouponListProps {
  coupons: ICoupon[];
  activeCoupon?: string;
}

export default function CouponList({
  coupons,
  activeCoupon,
}: ICouponListProps) {
  return (
    <div className="w-full overflow-x-auto pb-4 mb-6 scrollbar-hide">
      <div className="flex gap-3 w-max">
        <Link
          href="/"
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
            !activeCoupon
              ? "bg-teal-700 text-white border-teal-700"
              : "bg-white text-gray-600 border-gray-300 hover:border-teal-700 hover:text-teal-700"
          }`}
        >
          All Products
        </Link>

        {coupons.map((coupon) => (
          <Link
            key={coupon.id}
            href={`/?coupon=${coupon.code}`}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors flex items-center gap-2 ${
              activeCoupon === coupon.code
                ? "bg-teal-700 text-white border-teal-700"
                : "bg-white text-gray-600 border-gray-300 hover:border-teal-700 hover:text-teal-700"
            }`}
            title={coupon.description}
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
                d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            {coupon.code}
          </Link>
        ))}
      </div>
    </div>
  );
}
