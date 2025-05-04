import React, { useState } from 'react';
import AddProductForm from '../Components/AddProductForm';
import SearchBar from '../Components/SearchBar';
import ProductList from '../Components/ProductList';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const addProduct = (product) => {
    const isDuplicate = products.some(
      (p) => p.name.trim().toLowerCase() === product.name.trim().toLowerCase()
    );

    if (isDuplicate) {
      setError(`Product "${product.name}" already exists.`);
    } else {
      setProducts([...products, product]);
      setError(''); // Clear previous error
    }
  };

  const removeProduct = (indexToRemove) => {
    setProducts(products.filter((_, i) => i !== indexToRemove));
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Home Page</h2>
        <button className="bg-red-500 text-white px-4 py-2" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Show error message */}
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <AddProductForm onAddProduct={addProduct} />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <ProductList products={filteredProducts} onRemoveProduct={removeProduct} />
    </div>
  );
};

export default HomePage;
