import React, { useState } from 'react';

const Status = () => {
  const [statusData, setStatusData] = useState(null);
  const [error, setError] = useState('');

  const fetchStatus = async () => {
    const url = `http://127.0.0.1:1213/?a=9&b=90`;
    console.log(url);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      // console.log(response);
      const data = await response.json();
      console.log(data);
      setStatusData(data);
      setError('');
    } catch (error) {
      setError(error.message);
      setStatusData(null);
    }
  };

  return (
    <div>
      <button onClick={fetchStatus}>Press</button>
    </div>
  );
};

export default Status;


