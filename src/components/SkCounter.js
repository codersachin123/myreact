import React, { useState } from "react";
// import '/SkCounter.css'
const SkCounter = (props) => {
    const [count, setcount] = useState(0);
    const [num1, setadd1] = useState(0);
    const [num2, setadd2] = useState(0);
    return <p>
        <h2>Count ={count}</h2>
        <button onClick={() => setcount(count - 1)}>



            Minus
        </button>
        <button onClick={() => setcount(count + 1)}>
            Plus
        </button>
        <input type="Number" onChange={event => setadd1(event.target.value)} />
        <input type="Number" onChange={event => setadd2(event.target.value)} />
        <h2>{num1}</h2>
        <h2>{num2}</h2>
        <h2>{Number(num1) + Number(num2)}</h2>

    </p>

}
export default SkCounter;