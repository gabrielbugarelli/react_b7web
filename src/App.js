import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width:400px;
  heigth:50px;
  font-size: 16px;
  padding: 10px;
  border: 0.5;
`
const App = () => {

  const [texto, setTexto] = useState('')
  //Jeito tradicional de se trabalhar com estado
  // const handleInput = (e) => {
  //   setTexto(e.target.value)
  // }

  return <>
    <Input type="text" onChange={(e) => { setTexto(e.target.value) }} />
    <p>Os número de caracteres é: {texto.length}</p>
  </>
}

export default App;