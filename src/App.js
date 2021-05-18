import React, { useState } from 'react'
import Modal from './components/Modal'

const App = () => {

  const [modalVisible, setModalVisible] = useState(false)

  const handleButtonClick = () => setModalVisible(true)

  return (
    <>
      <button onClick={handleButtonClick}>Abrir Modal</button>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <h1>Este aqui será o Modal</h1>
      </Modal>
    </>
  )
}

export default App;