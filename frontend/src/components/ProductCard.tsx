import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
}

const ProductCard = ({ product }: { product: Product }) => (
  <div>
    <img src={product.thumbnail} alt={product.name} />
    <h2>{product.name}</h2>
    <p>${product.price}</p>
  </div>
);

export default ProductCard;
