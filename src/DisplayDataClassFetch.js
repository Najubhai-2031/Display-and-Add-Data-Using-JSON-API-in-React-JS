import React from "react";

class DisplayDataClassFetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => this.setState({ Data: res }))
    }


    render() {
        return (
            <React.Fragment>
                 <h1>Display Data Using Class-Fetch</h1>
                {
                    this.state.Data.map(item => {
                        return (
                            <div>
                               
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        );
    }
}

export default DisplayDataClassFetch;