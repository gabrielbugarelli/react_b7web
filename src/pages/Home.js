import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {

    let history = useHistory()
    const handleButton = () => {
        setTimeout(() => {
            history.replace('/sobre')
        }, 2000)
    }

    return (
        <div>
            <h4>PÁGINA HOME</h4>

            <button onClick={handleButton} >Ir para a página SOBRE</button>
        </div>
    )
}

export default Home