import React from 'react';

const ProductList = ({ products, onRemoveProduct }) => {
  if (products.length === 0) {
    return <p>No Product Found</p>;
  }

  return (
    <ul className="space-y-2">
      {products.map((product, index) => (
        <li
          key={index}
          className="border p-2 flex justify-between items-center"
        >
          <span>
            {product.name} - ${product.price}
          </span>
          <button
            className="text-red-500 hover:text-red-700 cursor-pointer"
            onClick={() => onRemoveProduct(index)}
            title="Remove"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
