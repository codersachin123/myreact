import React, { useState, useEffect } from "react";
const Squarearea = () => {

    const [side, setSideA] = useState(0);
    const [area, setArea] = useState(0);
    const [Perimeater,setperimeater] = useState(0);
    useEffect(() => {

        setArea(side * side);
        setperimeater(side * 4);

    });


    const handlearea = (value) => {
        console.log("Area");
        setSideA(value);

    };
    




    return <div>
        <label>Side</label>
        <input type="text" onChange={e => handlearea(e.target.value)} />




        <h1>Area ={area}</h1>
        <h1>Perimeater{Perimeater}</h1>

    </div>
};
export default Squarearea