import React, { useState } from "react";
import './Result.css';

function Result() {
    const [rollNo, setRollNo] = useState('');
    const [name, setName] = useState('');
    const [className, setClassName] = useState('');
    const [error, setError] = useState('');
    const [statusData, setStatusData] = useState(null);
    const [operation, setOperation] = useState('insert');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(rollNo, name, className);

        const fetchStatus = async () => {
            let url;
            if (operation === 'delete') {
                url = `http://localhost:3000/delete?roll_no=${rollNo}`;
            } else if (operation === 'select') {
                url = `http://localhost:3000/select?roll_no=${rollNo}`;

            } else {
                url = `http://localhost:3000/${operation}?roll_no=${rollNo}&name=${name}&class=${className}`;
            }
            console.log(url);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                if (operation === 'select') {
                    const htmlData = await response.text();
                    setStatusData(htmlData);
                    setError('');
                } else {
                    const data = await response.json();
                    console.log(data);
                    setStatusData(data);
                    setError('');
                }
            } catch (error) {
                setError(error.message);
                setStatusData(null);
            }
        };

        fetchStatus();
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h4>
                    <label>
                        Roll No:
                        <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
                    </label>
                </h4>
                <h4>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                </h4>
                <h4>
                    <label>
                        Class:
                        <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} />
                    </label>
                </h4>
                <button type="submit">Submit</button>
            </form>
            <div className="radio-group">
                <tr>
                    <td>
                    <input
                        type="radio"
                        value="insert"
                        checked={operation === 'insert'}
                        onChange={() => setOperation('insert')}
                    /> Insert
                </td>
                <td>
                    <input
                        type="radio"
                        value="update"
                        checked={operation === 'update'}
                        onChange={() => setOperation('update')}
                    /> Update
                </td>
                <td>
                    <input
                        type="radio"
                        value="delete"
                        checked={operation === 'delete'}
                        onChange={() => setOperation('delete')}
                    /> Delete
                </td>
                <td>
                    <input
                        type="radio"
                        value="select"
                        checked={operation === 'select'}
                        onChange={() => setOperation('select')}
                    /> Select
                </td>
                </tr>
            </div>
            {error && <p className="error">{error}</p>}
            {statusData && operation !== 'select' && <p className="success">Submission successful!</p>}
            {statusData && operation === 'select' && (
                <div dangerouslySetInnerHTML={{ __html: statusData }} />
            )}
        </div>
    );
}

export default Result;

