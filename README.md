# react-webstore

> Simple &amp; Light-Weight Alternative for redux

[![NPM](https://img.shields.io/npm/v/react-webstore.svg)](https://www.npmjs.com/package/react-webstore) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-webstore
```

## Usage

```jsx
import React from 'react'

import { ReactWebStore } from 'react-webstore';
// import 'react-webstore/dist/index.css'

const App = () => {

  const rws = new ReactWebStore();

  rws.subscribe('key1', (e) => {
      let payload = rws.getStore(e.type);
      console.log("Payload @ key1 - ", payload)
  })

  rws.subscribe('key2', (e) => {
      let payload = rws.getStore(e.type);
      console.log("Payload @ key2 - ", payload)
  })

  return (
    // <ExampleComponent text="Create React Library Example 😄" />
    <div>
      
      <button onClick={() => {
          rws.store('key1', 'Hello')
      }}>Click To Store @ key1</button>

      <button onClick={() => {
          rws.store('key2', 'World')
      }}>Click To Store @ key2</button>

      <br /><br />

      <button onClick={() => {
          console.log(rws.getStore())
      }}>Click To Show</button>

    </div>
  )
}

export default App
```

## License

MIT © [manjujidagi](https://github.com/manjujidagi)
