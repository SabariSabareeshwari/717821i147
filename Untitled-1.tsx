// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [number, setNumber] = useState('');
  const [average, setAverage] = useState(null);

  const handleAddNumber = async () => {
    try {
      await axios.post('/add', { number: parseFloat(number) });
      setNumber('');
      calculateAverage();
    } catch (error) {
      console.error('Error adding number:', error);
    }
  };

  const calculateAverage = async () => {
    try {
      const response = await axios.get('/average');
      setAverage(response.data.average);
    } catch (error) {
      console.error('Error calculating average:', error);
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleAddNumber}>Add Number</button>
      {average && <p>Average: {average}</p>}
    </div>
  );
}

export default App;
