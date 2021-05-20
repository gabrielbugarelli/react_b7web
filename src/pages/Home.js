import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = (props) => {

    let history = useHistory()
    const handleButton = () => {
        setTimeout(() => {
            history.replace('/sobre')
        }, 2000)
    }

    const handleBonieky = () => {
        props.setName('Bonieky')
    }

    const handleIncrement = () => {
        props.increment()
    }

    return (
        <div>
            <h4>PÁGINA HOME</h4>

            NOME: {props.name} <br />
            CONTAGEM: {props.contador}

            <button onClick={handleBonieky}>Setar nome para Bonieky</button>
            <button onClick={handleIncrement}>+1</button>

            <br />
            <br />

            <button onClick={handleButton} >Ir para a página SOBRE</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.usuario.name,
        contator: state.usuario.contador
    }
}

const mapDistatchToProps = (dispatch) => {
    return {
        setName: (newName) => dispatch({
            type: 'SET_NAME',
            payload: { name: newName }
        }),

        increment: () => dispatch({
            type: 'INCREMENT_CONTADOR'
        })
    }
}

export default connect(mapStateToProps, mapDistatchToProps)(Home);