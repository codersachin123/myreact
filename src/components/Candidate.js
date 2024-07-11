import React, { useState } from 'react';

const Candidate = () => {
  const [candidateData, setCandidateData] = useState(null);
  const [error, setError] = useState('');

  const fetchUrl = async () => {
    const url = `http://localhost:3000`;
    console.log(url);
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
      setCandidateData(data);
      setError('');
    } catch (error) {
      setError(error.message);
      setCandidateData(null);
    }
  };

  return (
    <div>
      <button onClick={fetchUrl}>Press</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {candidateData && <pre>{JSON.stringify(candidateData, null, 2)}</pre>}
    </div>
  );
}

export default Candidate;
