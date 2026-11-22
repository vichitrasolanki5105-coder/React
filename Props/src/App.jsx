import React from 'react'
import Productcard from "./Components/ProductCards"

export default function App() {
  var name = "Vichitra Solanki"
  return(
    <div>
      <h1>Hello</h1>
      <Productcard Name={name}/>
    </div>
  )
}