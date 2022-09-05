import axios from 'axios';
import React from 'react'

class AddDataClassAxios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    handleChange(event) {
        this.setState({ data: event.target.value })
    }

    handleSubmit() {
        const newData = {
            title: this.state.data
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',{newData})
            .then(res => console.log(res.data))
    }

    render() {
        return (
            <React.Fragment>
                <h1>Add Data Using Class-Axios</h1>
                Enter Title:- <input name='title' onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleSubmit.bind(this)}>Add</button>
            </React.Fragment>
        );
    }
}

export default AddDataClassAxios;