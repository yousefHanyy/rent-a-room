export default async function ProductsList({ query }: { query?: string }) {
  const url = query
    ? `https://dummyjson.com/products/search?q=${query}`
    : "https://dummyjson.com/products";

  const products = await fetch(url);
  const data = await products.json();

  if (data.products.length === 0) {
    return <p>No products found for "{query}"</p>;
  }

  return (
    <div className="flex items-center flex-col gap-2">
      {data.products.map((product: any) => (
        <li
          className="border w-250 p-4 rounded bg-white shadow-sm"
          key={product.id}
        >
          <h2 className="font-semibold">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
        </li>
      ))}
    </div>
  );
}
