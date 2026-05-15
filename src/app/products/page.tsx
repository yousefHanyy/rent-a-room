import { Suspense } from "react";
import ProductsList from "../components/ProductsList";

export const revalidate = 60;
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams; // getting the query from the URL
  return (
    <div className="flex flex-col items-center">
      <h1>Our Products:</h1>
      <form action="/products" method="GET" className="my-4">
        <input
          name="q"
          defaultValue={q}
          placeholder="Search products..."
          className="border p-2 mr-2 rounded text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded cursor-pointer"
        >
          Search
        </button>
      </form>
      <ul className="flex flex-col justify-evenly">
        <Suspense
          key={q}
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
          }
        >
          <ProductsList query={q} />
        </Suspense>
      </ul>
    </div>
  );
}
