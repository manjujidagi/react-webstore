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
