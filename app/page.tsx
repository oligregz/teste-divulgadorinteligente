import { getProducts } from "../services/api.service";
import ProductCard from "../components/ProductCard.component";

export default async function Home() {
  const products = await getProducts(0, 20);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Latest Offers</h1>

      <div
        id="d-products-grid"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
