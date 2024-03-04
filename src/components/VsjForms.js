import React, { useState } from "react";
const VsjForms = () => {
    const [enteredamount, SetEnteredAmount] = useState(0);
    const amountChangeHandler = (event) => {
        
    console.log('Amunt Changed');
    console.log(event.target.value);
    SetEnteredAmount(event.target.value)
  };


    return <form>
        <label>Amount</label>
        <input type="text" onChange={amountChangeHandler} />
        <h1>{enteredamount}</h1>
    </form>
}
export default VsjForms;