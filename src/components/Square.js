import React, { useState } from "react";
const Square = () => {
   const [side, setSideA] = useState(0);

   const n1ChangeHandler = (event) => {
      console.log("n1 Changed");
      console.log(event.target.value)
      setSideA(Number(event.target.value));
   }



   return <div>
      <label>Side</label>
      <input type="text" onChange={n1ChangeHandler} />
      <h1>side{side}</h1>
      <h1>Area ={side*side}</h1>
      <h1>Perimeater={side*4}</h1>
      
   </div>

}
export default Square
