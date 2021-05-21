import React from 'react'
import { connect } from 'react-redux'

const Login = (props) => {

    const handleFelipe = () => {
        props.setName('Felipe')
    };

    return (
        <div>
            <h1>Efetue o login para acessar!</h1>

            <p>O nome é: {props.name}</p>


            <br /><br />
            <button onClick={handleFelipe}>Trocar nome para Felipe</button>
        </div>
    )
}

const mapStateToProps = state => ({
    name: state.usuario.name
});

const mapDistatchToProps = dispatch => ({
    setName: (newName) => dispatch({
        type: 'SET_NAME',
        payload: { name: newName }
    })
})

export default connect(mapStateToProps, mapDistatchToProps)(Login)