import React, { useState, useEffect } from 'react';

function DisplayDataFunctionFetch(props) {
    const [Data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    return (
        <React.Fragment>
            <h1>Display Data Using Function-Fetch</h1>
            {
                Data.map(item =>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                )
            }
        </React.Fragment>
    );
}

export default DisplayDataFunctionFetch;