import React, { useState } from "react";

function Geone() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [statusData, setStatusData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(id, name);

        const fetchStatus = async () => {
            const url = `http://localhost:3000/insert?id=${id}&name=${name}`;
            console.log(url);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const data = await response.json();
                console.log(data);
                setStatusData(data);
                setError('');
            } catch (error) {
                setError(error.message);
                setStatusData(null);
            }
        };

        fetchStatus();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>id :
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                </h4>
                <h4>Name :
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </h4>

                <button>Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {statusData && <p style={{ color: 'green' }}>Submission successful!</p>}
        </div>
    );
}

export default Geone;
