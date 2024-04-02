import React, { useState, useEffect } from 'react';

const A = () => {
    const [count, setCount] = useState(0);
    const [x1, setx1] = useState(2);

    
    useEffect(() => {
        
        alert(`Count changed to: ${count}`);
        alert(`x1 changed to: ${x1}`);
    }
    );


    const handleIncrement = () => {
        setCount(count + 1);
        
    };
    const handleDecrement =() => {
        
        setx1(x1 *8);
    }

    return (
        <div>
            <h1>Effect With Variable</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <p>x1:{x1}
            </p>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default A;