import axios from 'axios';
import React, { useState } from 'react';

function AddDataFunctionAxios(props) {
    const [Data,setData] = useState('')

    const handleChange = (event) =>{
        setData(event.target.value)
    }

    const handleSubmit =(event) =>{
        const newData ={
            title:Data
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',{newData})
        .then(res=>console.log(res))
    }
    return (
        <React.Fragment>
             <h1>Add Data Using Function-Axios</h1>

             Enter Title:- <input onChange={handleChange}/>
             <button onClick={handleSubmit}>Add</button>
        </React.Fragment>
    );
}

export default AddDataFunctionAxios;