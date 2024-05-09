import React,{useState,useEffect} from "react";
const Ts = () => {
      const [num1, setNum1] = useState(" ");
      const [num2, setNum2] = useState(" ");
      const [num3, setNum3] = useState("");
      const [largest, setLargest] = useState(" ");

      useEffect(() => {
        const num1 = (num1);
        const num2 = (num2);
        const num3 = (num3);
    
        const max = (num1, num2, num3);
        if ((max)) {
          setLargest(max);
        }
      }, [num1, num2, num3]);
    
      return (
        <div>
          <input
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter number 1"
          />
          <input
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter number 2"
          />
          <input
            type="text"
            value={num3}
            onChange={(e) => setNum3(e.target.value)}
            placeholder="Enter number 3"
          />
          <div>
            {largest && <p>The largest number is: {largest}</p>}
          </div>
        </div>
      );
    }
    
    
    

export default Ts
