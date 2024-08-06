
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onAuthSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/authenticate', { username, password });
      if (response.data.success) {
        onAuthSuccess();
      } else {
        setError('Authentication Failed');
      }
    } catch (err) {
      setError('Authentication Failed');
    }
  };

  return (
    <div  className="modal fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center transition-opacity duration-300 opacity-100 pointer-events-auto" >
    <div className="modal-content bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
      <div className="modal-header flex justify-between items-center mb-4">
      </div>
      <div className="modal-body">
      <form onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700">Username:</label>
        <input className="border p-2 w-full" type="text" value={username} maxLength={20} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password:</label>
        <input className="border p-2 w-full" type="text" value={password} maxLength={20} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button className="bg-blue-500  hover:bg-blue-800 active:bg-blue-400 text-white px-4 py-2 rounded mt-2" type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
      </div>
    </div>
  </div>
    
  );
};

export default LoginForm;
