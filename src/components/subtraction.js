import React,{useState} from "react";

const Subtraction = () => {
    const [A, setA] = useState('');
    const [B, setB] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const fetchTransfer = async (event) => {
        event.preventDefault(); 
        const url = `http://127.0.0.1:1213
        /?A=${A}&B=${B}`; 
        console.log(url);
        setLoading(true); 
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            console.log(data);
            setResult(data);
            setError('');
        }
        catch (error) {
            setError(error.message);
            setResult(null);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <div>
                <label>
                    A:
                    <input type="number" value={A} onChange={(e) => setA(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    B:
                    <input type="number" value={B} onChange={(e) => setB(e.target.value)} />
                </label>
            </div>
            <button onClick={fetchTransfer}>calculate </button>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {result !== null && <p>Result: {result}</p>}
        </div>
    );
};

export default Subtraction;
