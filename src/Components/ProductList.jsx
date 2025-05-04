import React from 'react';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p>No Product Found</p>;
  }

  return (
    <ul className="space-y-2">
      {products.map((product, index) => (
        <li key={index} className="border p-2">
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;