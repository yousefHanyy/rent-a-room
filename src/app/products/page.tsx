export default async function page() {
  const products = await fetch("https://dummyjson.com/products");
  const res = await products.json();

  return (
    <div>
      <p>Products:</p>
      <ul className="flex flex-col justify-evenly">
        {res.products.map((product: any) => (
          <li className="border m-2" key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
