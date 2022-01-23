# react-webstore

> Simple &amp; Light-Weight Alternative for _Redux_

[![NPM](https://img.shields.io/npm/v/react-webstore.svg)](https://www.npmjs.com/package/react-webstore) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Minified Size](https://img.shields.io/bundlephobia/min/react-webstore)
![MIT License](https://img.shields.io/npm/l/react-webstore)
![Downloads](https://img.shields.io/npm/dm/react-webstore)

## Install

```bash
npm install --save react-webstore
```

## Usage

### App.js
___
```jsx
import React from 'react'

import { HelloComponent } from './Components/HelloComponent';
import { WorldComponent } from './Components/WorldComponent';

const App = () => {

  return (
    <div>

      <HelloComponent />
      <WorldComponent />

    </div>
  )
}

export default App
```

### Components/HelloComponent.js
___
```jsx
import React from 'react'
import { ReactWebStore } from 'react-webstore';

export class HelloComponent extends React.Component {

    constructor() {
        super()

        this.rws = new ReactWebStore();
        this.state = {
            message: ''
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
```

### Components/WorldComponent.js
___
```jsx
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
```

## License

MIT © [manjujidagi](https://github.com/manjujidagi)
