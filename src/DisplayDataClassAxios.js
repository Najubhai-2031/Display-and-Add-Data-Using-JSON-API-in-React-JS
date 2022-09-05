import React from 'react'
import axios from 'axios'

class DisplayDataClassAxios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => this.setState({ data: res.data }))
    }
    render() {
        return (
            <React.Fragment>
                <h1>Display Data Using Class-Axios</h1>

                {
                    this.state.data.map(item =>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    )
                }
            </React.Fragment>
        );
    }
}

export default DisplayDataClassAxios;