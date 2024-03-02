import React, { useState } from "react";
// import '/SkCounter.css'
const SkCounter = (props) => {
    const [count, setcount] = useState(0);
    const [a, b, setadd] = useState(0);
    return <p>
        <h2>Count ={count}</h2>
        <button onClick={() => setcount(count - 1)}>


            Minus
        </button>
        <button onClick={() => setcount(count + 1)}>
            Plu
        </button>
    </p>

}
export default SkCounter;