

import React, { useState } from 'react';
const Rectangle = () => {
    const [length, setLength] = useState(0)
    const [breadth, ssetBreadth] = useState(0)
    const n1ChangeHandler = (event) => {
        console.log("N1 Changed");
        console.log(event.target.value);
        setLength(Number(event.target.value));
    }
    const n2ChangeHander = (event) => {
        console.log("N2 Changed");
        
        console.log(event.target.value);
        ssetBreadth(Number(event.target.value));
    }

    return <div>
        <label>Length</label>
        <input type='text' onChange={n1ChangeHandler} />
        <h1>Length{length}</h1>
        <label>Breadth</label>
        <input type='text' onChange={n2ChangeHander} />
        <h1>Breadth{breadth}</h1>
        <h1>Area ={length*breadth}</h1>
    </div>


}
export default Rectangle;