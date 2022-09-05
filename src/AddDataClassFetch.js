import React from "react";

class AddDataClassFetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    handleChange(event) {
        this.setState({ title: event.target.value })
    }

    handleSubmit(event) {
        const data = {
            title: this.state.title
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(res => console.log(res))
        event.preventDefault();

    }

    render() {
        return (
            <React.Fragment>
                <h1>Add Data Using Class-Fetch</h1>
                <br /><br />Enter Title:- <input type='text' name="title" onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleSubmit.bind(this)}>Add</button>
            </React.Fragment>
        )
    }
}

export default AddDataClassFetch;