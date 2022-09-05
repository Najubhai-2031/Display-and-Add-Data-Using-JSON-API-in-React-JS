import React, { useState } from 'react';

function AddDataFunctionFetch(props) {

    const [Data, setData] = useState('')

    const handleChange = (event) => {
        setData(event.target.value)
    }

    const handleSubmit = () => {
        const newData = {
            Data
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
    }


return (
    <React.Fragment>
        <h1>Add Data Using Function-Fetch</h1>

        Enter Title:- <input name='title' onChange={handleChange} />
        <button onClick={handleSubmit}>Add</button>
    </React.Fragment>
);
}

export default AddDataFunctionFetch;