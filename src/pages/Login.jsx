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
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTMzNDkzNTUsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2x1dW94M2d1MGsxYjA3dXdsamozbW50bC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiY2FmYjYwYjctMzE2My00OWEwLTkwZmQtMjk3OWQ0NWRkMGY5IiwianRpIjoiY2x2M255dmhrbWhlYzA3bXZnanVpMGY2NiJ9.klEUi3_fboyhksLwB0HmkF0zfvE_hCJuQYyyzrMdc3TXUNxobiyGcTpA72vmkDhG77hoQ8MAecr3NpOWTPU53Hxfl5Gf7y0azR8BrlXiFWJB6FTdYE_J_LbR6IwJfjBVnAnrBnBXb2d2rjfWftOq_HLV181AAikbN-lVtIDW6B_At9hF_VylbkhvIQxF_xFRvpvvGUb6-Q0BLObdC0dAwGe4sOi3QXE8dul32XDbbDLfpV_OXd0mfZrzj_29mBJz3mqpbNIIjHEEpnUo0din35x1s4SDrRF_k06fp0oj2nfqV3q6YmMNQ1x7dzSeIRIMEhyuFGf494eCq0Hv5jnyhaMWk2EeMrj012wPshJ0CE-u5tCR3Kk74NeBlSLIci2N9SwYlQTlrhTnAX6TezNV_wd2w1HkiwiWcL7FxsVLmU4HN7Wz87HM5a7QXNrAY-fRBreaj5hPlbGro0J0Be5F7JvydZs0KA728a-6TlPlrKnfRI1xFTOOFPir6XIuNtg4qLcrS1e0X_cr_MAZGx6pw7s_O6ItpqH7El5UroWmPSdYuQyGaYVeC33fjNMGeWrKMNVvRUNMqsI7trtGWTWdx53Vilbmhr9PTGyllM-e5fdpNVhAcZPZJP5Q34qVDqzh0097Lmq0icS8n2CE64iHQ4AlD8DoWuY2Wv1MZWoi7NQ',
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