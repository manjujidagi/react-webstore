import React from 'react'

import { ReactWebStore } from 'react-webstore';
import { HelloComponent } from './Components/HelloComponent';
import { WorldComponent } from './Components/WorldComponent';

const App = () => {

  const rws = new ReactWebStore();
  const rws2 = new ReactWebStore();

  rws.subscribe('key1', (e) => {
      let payload = rws.getStore(e.type);
      console.log("Payload @ key1 - ", payload)
  })

  rws2.subscribe('key2', (e) => {
      let payload = rws.getStore(e.type);
      console.log("Payload @ key2 - ", payload)
  })

  return (
    <div>

      <HelloComponent />
      <WorldComponent />
      
      {/* <button onClick={() => {
          rws.store('key1', 'Hello')
      }}>Click To Store @ key1</button>

      <button onClick={() => {
          rws.store('key2', 'World')
      }}>Click To Store @ key2</button>

      <br /><br />

      <button onClick={() => {
          console.log(rws.getStore())
      }}>Click To Show</button> */}

    </div>
  )
}

export default App
