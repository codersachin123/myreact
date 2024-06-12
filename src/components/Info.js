import React, { useState } from "react";

const Info = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [infoData, setInfoData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');

    const fetchInfo = async () => {
        const url = `http://127.0.0.1:3000?username=${username}&password=${password}`;
        console.log(url);
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            console.log(data);
            setInfoData(data);
            setError('');
            if (data.isValid) {  
                setResult('yes');
            } else {
                setResult('no');
            }
        } catch (error) {
            setError(error.message);
            setInfoData(null);
            setResult('yes');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
            </div>
            <button onClick={fetchInfo}>Press</button>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {result && <p>Result: {infoData}</p>}
        </div>
    );
};

export default Info;



