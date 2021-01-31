import './App.css';
import HTTPRequestForm from './components/httpRequestForm/httpRequestForm';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to HTTP Requester</h1>
        <main className='main'>
          <section className='request'>
            <h2>Request</h2>

            <HTTPRequestForm />
          </section>
          <section>
            <h2>Response</h2>
          </section>
        </main>
      </header>
    </div>
  );
}

export default App;
