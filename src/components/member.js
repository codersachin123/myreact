import React, { useState } from "react";

function Member() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [work, setWork] = useState('');
    const [error, setError] = useState('');
    const [statusData, setStatusData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(id, name, place, work);

        const fetchStatus = async () => {
            const url = `http://localhost:3000/insert?id=${id}&name=${name}&place=${place}&work=${work}`;
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
                <h4>Place :
                    <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
                </h4>
                <h4>Work :
                    <input type="text" value={work} onChange={(e) => setWork(e.target.value)} />
                </h4>
                <button>Submit</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {statusData && <p style={{color: 'green'}}>Submission successful!</p>}
        </div>
    );
}

export default Member;
