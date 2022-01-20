import React from 'react'
import { ReactWebStore } from 'react-webstore';

export class WorldComponent extends React.Component {
    
    constructor() {
        super()

        this.state = {
            message: ''
        };
        this.rws = new ReactWebStore();

        this.rws.subscribe('message', (e) => {
            let msg = this.rws.getStore(e.type);
            this.setState({
                'message' : msg
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