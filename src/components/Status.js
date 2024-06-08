import React, { useState } from 'react';
function getData() {

  console.log("Clicked");
  alert();
  }

const Status = () => {
  

  return (
    <div>
      <button onClick={() => getData()}>Press</button>
    
    </div>
  );
};


export default Status;

