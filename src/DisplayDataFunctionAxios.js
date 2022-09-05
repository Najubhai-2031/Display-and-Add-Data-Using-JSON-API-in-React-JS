import axios from 'axios';
import React, { useState,useEffect } from 'react';

function DisplayDataFunctionAxios(props) {

    const [Data,setData] = useState([])

    useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/posts')
      .then(res=>setData(res.data))
    }, [])
    
    return (
        <React.Fragment>
            <h1>Display Data Using Function-Axios</h1>
            {
                Data.map(item=>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                    )
            }
        </React.Fragment>
    );
}

export default DisplayDataFunctionAxios;