export default async function CartPage({
  params,
}: {
  params: Promise<{ cart: string }>;
}) {
  const { cart } = await params;

  const res = await fetch(`https://dummyjson.com/carts/${cart}`, {
    cache: "no-store",
  });
  const data = await res.json();

  if (!data.products || !Array.isArray(data.products)) {
    return <div className="p-8">Replace cart in the url with a number</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Cart Details</h1>
      <p className="mb-4">
        Cart number: <b>{cart}</b>
      </p>
      <div className="border rounded p-4">
        {data.products.map((item: any) => (
          <div key={item.id} className="border-b last:border-0 py-2">
            {item.title} — ${item.price} (x{item.quantity})
          </div>
        ))}
        <p className="mt-4 text-xl font-bold text-green-600">
          Total: ${data.total}
        </p>
      </div>
    </div>
  );
}
