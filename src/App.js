import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [value, setValue] = useState(1)

  const clickButton = () => {
    setValue(
      value + 1
    )
  }

  return (
    <>
      <div>O valor atual é: {value}</div >

      <button onClick={clickButton}>CLique para atualizar o valor! </button>
    </>
  )
}

export default App;