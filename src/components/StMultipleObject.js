import { useState } from "react";
const StMultipleObject = () => {
    const [
        sumData, setSum] =useState (
            {
                n1: 0,
                n2: 0

            });
    const sumN1 = (event) => {
        setSum({
            ...sumData,
            n1: Number(event.target.value),

        });
        console.log("Object Changed");

    };
    const sumN2 = (event) => {
        setSum({
            ...sumData,
            n2: Number(event.target.value),

        });
        console.log("Object Changed");

    };
    return <form>
        <h1>N1 {sumData.n1}</h1>
        <h1>N2 {sumData.n2}</h1>
        <label>N1</label>
        <input type="text" onChange={sumN1} />


        <label>N2</label>
        <input type="text" onChange={sumN2} />
        {sumData.n1 + sumData.n2}



    </form>

}
export default StMultipleObject;