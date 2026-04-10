import {
  getProducts,
  getCoupons,
  getProductsByCoupon,
} from "../services/api.service";
import ProductCard from "../components/ProductCard.component";
import CouponList from "../components/CouponList.component";
import { IHomeProps } from "@/types/api.type";

export default async function Home({ searchParams }: IHomeProps) {
  const params = await searchParams;
  const activeCoupon =
    typeof params?.coupon === "string" ? params.coupon : undefined;

  const searchQuery =
    typeof params?.search === "string" ? params.search.toLowerCase() : "";

  const couponsData = getCoupons(0, 10);
  const productsData = activeCoupon
    ? getProductsByCoupon(activeCoupon, 0, 20)
    : getProducts(0, 20);

  const [coupons, products] = await Promise.all([couponsData, productsData]);

  const filteredProducts = products.filter((product) => {
    if (!searchQuery) return true;

    const titleMatch = product.title.toLowerCase().includes(searchQuery);
    const sellerMatch = product.seller.toLowerCase().includes(searchQuery);

    return titleMatch || sellerMatch;
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-100 mb-6">Latest Offers</h1>

      <CouponList coupons={coupons} activeCoupon={activeCoupon} />

      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500 bg-white rounded-xl border border-dashed border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 mb-4 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
          <p className="text-lg font-medium">
            {searchQuery
              ? `No products found matching "${searchQuery}".`
              : "No products found for this coupon."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
