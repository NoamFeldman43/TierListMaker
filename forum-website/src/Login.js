// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState(''); // State to display success message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      localStorage.setItem('token', response.data.token); // Store token in localStorage
      setUser(response.data.user); // Set user information in the App component
      setMessage('Login successful!'); // Set success message
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : error.message);
      setMessage('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>} {/* Display success or failure message */}
    </div>
  );
};

export default Login;
