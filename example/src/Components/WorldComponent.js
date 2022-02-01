import React from 'react'
import { ReactWebStore } from 'react-webstore';

export class WorldComponent extends React.Component {
    
    constructor() {
        super()

        this.rws = new ReactWebStore();
        this.state = {
            message: this.rws.getStore('message')
        };
    }

    componentDidMount() {
        this.rws.subscribe('message', (e) => {
            this.setState({
                'message' : this.rws.getStore(e.type)
            });
        })
    }

    render() {
        return (
            <>
                <p>Message From Hello Component is - {this.state.message}</p>
            </>
        )
    }

}