import { useQuery } from '@tanstack/react-query';

interface Product {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
}

const ProductsPage = () => {
  const { data, isLoading, isError } = useQuery(
    {
      queryKey: ['products'],
      queryFn: async () => {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products</div>;

  return (
    <div>
      {data?.products.map((product: Product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <img src={product.thumbnail} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
