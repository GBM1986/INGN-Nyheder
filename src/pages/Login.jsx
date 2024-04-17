import React, { useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api-eu-west-2.hygraph.com/v2/cluuox3gu0k1b07uwljj3mntl/master', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to authenticate. Please try again later.');
      }
      // Handle successful authentication response
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form className='h-screen max-w-7xl mx-auto px-20 md:px-26 lg:px-48 xl:px-48 border border-gray-300 rounded-lg bg-white space-y-8' onSubmit={handleSubmit}>
        <h1 className='text-3xl py-24'><strong>Log ind</strong></h1>
        <div>
          <label className='text-xs' htmlFor="username">Brugernavn:</label>
          <br />
          <input
            className='w-full p-2 border-2 border-red-600'
            type="text"
            id="username"
            autoComplete="current-password"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className='text-xs' htmlFor="password">Password:</label>
          <br />
          <input
            className='w-full p-2 border-2 border-red-600'
            type="password"
            id="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button className='border-2 border-red-600 px-16 py-4' type="submit">Log ind</button>
      </form>
    </div>
  );
};