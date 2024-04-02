import React, { useState, useEffect } from 'react';
const Marksheet = () => {
  const [marks, setMarks] = useState({
    math: 0,
    physics: 0,
    chemistry: 0
  });

  const [totalMarks, setTotalMarks] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const total = marks.math + marks.physics + marks.chemistry;
    setTotalMarks(total);
 const totalSubjects = 3;
    const calculatedPercentage = (total / (totalSubjects * 100)) * 100;
    setPercentage(calculatedPercentage);
  }, [marks]);
 const handleMarksChange = (subject, value) => {
    setMarks(prevState => ({
      ...prevState,
      [subject]: value
    }));
  };

  return (
    <div>
      <div>
        <label>Math Marks:</label>
        <input type="number" value={marks.math} onChange={e => handleMarksChange('math', parseInt(e.target.value))} />
      </div>
      <div>
        <label>physics Marks:</label>
        <input type="number" value={marks.physics} onChange={e => handleMarksChange('physics', parseInt(e.target.value))} />
      </div>
      <div>
        <label>chemistry Marks:</label>
        <input type="number" value={marks.chemistry} onChange={e => handleMarksChange('chemistry', parseInt(e.target.value))} />
      </div>
      <div>
        <h2>Total Marks: {totalMarks}</h2>
        <h2>Percentage: {percentage}%</h2>
      </div>
    </div>
  );
};



export default Marksheet