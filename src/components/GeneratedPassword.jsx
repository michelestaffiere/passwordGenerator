import React from 'react'
import {useState } from 'react'
const GeneratedPassword = () => {
const [string,setString] = useState("P4$5W0rD!")
  return (
    <div>
      <p>{string}</p>
      <button>copy button</button>
    </div>
  )
}

export default GeneratedPassword
