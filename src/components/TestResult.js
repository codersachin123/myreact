import React, { useState } from "react";
const TestResult = () => {
  const [ Physics, setphy ] = useState(0);
  const [Chemistry,setchem] = useState(0);
  const [Maths,setmath] = useState(0);
  const n1ChangeHandler = (event) => {
    console.log("n1 Changed");
    console.log(event.target.value)
    setphy(Number(event.target.value));
 }
 const n2ChangeHandler = (event) => {
  console.log("n2 Changed");
  console.log(event.target.value)
  setchem(Number(event.target.value));
}
const n3ChangeHandler = (event) => {
  console.log("n3 Changed");
  console.log(event.target.value)
  setmath(Number(event.target.value));
}

    
    return <div>
      <label>Physics</label>
      <input type="text" onChange={n1ChangeHandler} />
      <h1>Physics{Physics}</h1>
      <label>Chemistry</label>
      <input type="text" onChange={n2ChangeHandler} />
      <h1>Chemistry{Chemistry}</h1>
      <label>Maths</label>
      <input type="text" onChange={n3ChangeHandler} />
      <h1>Maths{Maths}</h1>
      <h1>Total Number : {Physics+Chemistry+Maths}</h1>
      <h1>Percent : {(Physics+Chemistry+Maths)/3}%</h1>
      
      
      
   </div>
}
export default TestResult
