import './App.css';
import React, { useState } from 'react';
import HTTPRequestForm from './components/httpRequestForm/httpRequestForm';

function App() {
  const [response, setResponse] = useState('awaiting response');

  const handleFormSubmit = async ({ url, method, headers, body }) => {
    if (method === 'GET') {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setResponse(JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
      return;
    }
    try {
      const res = await fetch(url, { method, headers, body });
      setResponse(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to HTTP Requester</h1>
        <main className='main'>
          <section className='request'>
            <h2>Request</h2>
            <HTTPRequestForm handleFormSubmit={handleFormSubmit} />
          </section>
          <section className='response'>
            <h2>Response</h2>
            <code>{response}</code>
          </section>
        </main>
      </header>
    </div>
  );
}

export default App;
