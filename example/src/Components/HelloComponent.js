import React from 'react'
import { ReactWebStore } from 'react-webstore';

export class HelloComponent extends React.Component {

    constructor() {
        super()

        this.rws = new ReactWebStore(true);
        this.state = {
            message: this.rws.getStore('message') ? this.rws.getStore('message') : ''
        };
    }

    render() {
        return (
            <>
                <input type="text" placeholder='Enter Message' value={this.state.message} onChange={(e) => {
                    this.setState({
                        'message': e.target.value
                    });
                }} />
                <button onClick={() => {
                    this.rws.store('message', this.state.message);
                }}>Send Message To World</button>
            </>
        )
    }

}