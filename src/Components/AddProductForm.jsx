import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (name && price) {
      onAddProduct({ name, price });
      setName('');
      setPrice('');
    }
  };

  return (
    <div className="mb-4">
      <input className="border p-2 mr-2" type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="border p-2 mr-2" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button className="bg-green-500 text-white px-4 py-2" onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddProductForm;