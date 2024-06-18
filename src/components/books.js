import React, { useState } from "react";

const Books = () => {
  const [booksData, setBooksData] = useState(null);
  const [error, setError] = useState('');

  const fetchBooks = async () => {
    const url = `http://localhost:1213/url`;
    console.log(url);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      setBooksData(data);
      setError('');
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
      setBooksData(null);
    }
  };

  return (
    <div>
      <button onClick={fetchBooks}>Details</button>
      {error && <p>Error: {error}</p>}
      {booksData && (
        <div>
          <h2>Books:</h2>
          <ul>
            {booksData.map((book, index) => (
              <li key={index}>
                <strong>{book.name}</strong> - ${book.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Books;


 