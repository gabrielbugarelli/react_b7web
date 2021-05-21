import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {

    let history = useHistory();
    const dispatch = useDispatch();

    const name = useSelector(state => state.usuario.name);
    const contador = useSelector(state => state.usuario.contador);

    const handleButton = () => {
        setTimeout(() => {
            history.replace('/sobre')
        }, 2000)
    }

    const handleBonieky = () => {
        dispatch({
            type: 'SET_NAME',
            payload: { name: 'Bonieky' }
        })
    }

    const handleIncrement = () => {
        dispatch({
            type: 'INCREMENT_CONTADOR'
        })
    }

    return (
        <div>
            <h4>PÁGINA HOME</h4>

            NOME: {name}
            <br /><br />
            CONTAGEM: {contador}

            <button onClick={handleBonieky}>Setar nome para Bonieky</button>
            <button onClick={handleIncrement}>+1</button>

            <br />
            <br />

            <button onClick={handleButton} >Ir para a página SOBRE</button>
        </div>
    )
}

export default Home;