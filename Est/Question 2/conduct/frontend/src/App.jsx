import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/data')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success! Received data:', data);
        setData(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>React & Spring Boot CORS Demo</h2>
      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {data ? (
        <div style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          <p><strong>Message:</strong> {data.message}</p>
          <p><strong>Status:</strong> {data.status}</p>
        </div>
      ) : (
        !error && <p>Loading data from backend...</p>
      )}
    </div>
  );
};

export default App;