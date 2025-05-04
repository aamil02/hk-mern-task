import React, { useState, useEffect } from 'react';
import AddProductForm from '../Components/AddProductForm';
import SearchBar from '../Components/SearchBar';
import ProductList from '../Components/ProductList';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ onLogout }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addProduct = (product) => {
    if (!products.some(p => p.name.toLowerCase() === product.name.toLowerCase())) {
      setProducts([...products, product]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    onLogout();   
    navigate('/login');
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Home Page</h2>
        <button className="bg-red-500 text-white px-4 py-2" onClick={handleLogout}>Logout</button>
      </div>
      <AddProductForm onAddProduct={addProduct} />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;