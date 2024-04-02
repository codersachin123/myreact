import React, { useState, useEffect } from 'react';

const Counter = () => {



    const [x, setCount] = useState(0);
    const [picpath, setPath] = useState('images/0.jpg');

    useEffect(() => {

        setPath(`images/${x}.jpg`);
    });



    return (
        <div>

            <img src={picpath}></img>
            <table border="1">
                <tr>
                    <td> <button onClick={() => setCount(x - 1)}>
                        MINUS
                    </button> </td>


                    <td> <p>Count: {x}</p> </td>
                    <td> <button onClick={() => setCount(x + 1)}>
                        PLUSS
                    </button> </td>
                </tr>
            </table>

        </div>
    )
}
export default Counter;