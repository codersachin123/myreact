import React, { useState } from "react";
const Shaktimaan = () => {
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
        <h1>Perimeater ={side * 2}</h1>

    </div>

}
export default Shaktimaan
