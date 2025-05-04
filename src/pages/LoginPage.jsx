import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
        const response = await axios.post(
            'https://reqres.in/api/login',
            { email, password },
            {
              headers: {
                'x-api-key': 'reqres-free-v1',
              },
            }
        );
        console.log('authToken', response.data.token)
        onLogin();
      localStorage.setItem('authToken', response.data.token);
      navigate('/home');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Login</h2>
      <input className="border p-2 mb-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 mb-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleLogin}>Login</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default LoginPage;