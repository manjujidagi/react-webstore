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


## Usage ( Without Persistent Storage )

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

        // for persistent storage, refer next section
        this.rws = new ReactWebStore();
        this.state = {
            message: ''
        };
    }

    render() {
        return (
            <>
                <input type="text" placeholder='Enter Message'
                    value={this.state.message}
                    onChange={(e) => {
                        this.setState({
                            'message': e.target.value
                        });
                    }}
                />
                <button
                    onClick={() => {
                        this.rws.store('message', this.state.message);
                    }}
                >Send Message To World Component</button>
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

        // 'true' for persistent Storage
        // 'false' for normal use without storage
        this.rws = new ReactWebStore(persistent=true);
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
```


## Usage ( With Persistent Storage )

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

        // The persisted data uses localStorage to store & retrieve the data
        this.rws = new ReactWebStore(persistent=true);
        this.state = {
            message: this.rws.getStore('message') ? this.rws.getStore('message') : ''
        };
    }

    render() {
        return (
            <>
                <input type="text" placeholder='Enter Message'
                    value={this.state.message}
                    onChange={(e) => {
                        this.setState({
                            'message': e.target.value
                        });
                    }}
                />
                <button
                    onClick={() => {
                        this.rws.store('message', this.state.message);
                    }}
                >Send Message To World</button>
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

        // The persisted data uses localStorage to store & retrieve the data
        this.rws = new ReactWebStore(persistent=true);
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
```

## License

MIT © [manjujidagi](https://github.com/manjujidagi)
