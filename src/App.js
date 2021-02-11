import './App.css';
import React, { useState } from 'react';
import HTTPRequestForm from './components/httpRequestForm/httpRequestForm';

function App() {
  const [response, setResponse] = useState('awaiting response');
  const [body, setBody] = useState(`{"greeting": "hello"}`);

  const handleFormSubmit = async ({ url, method }) => {
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
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
      const data = await res.json();
      setResponse(JSON.stringify(data));
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
            <HTTPRequestForm
              handleFormSubmit={handleFormSubmit}
              setBody={setBody}
              body={body}
            />
          </section>
          <section className='response'>
            <h2>Response Body</h2>
            <code>{response}</code>
          </section>
        </main>
      </header>
    </div>
  );
}

export default App;
