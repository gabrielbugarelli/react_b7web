import React, { useState, useEffect } from 'react'
import st from 'styled-components'

let InputText = st.input`
    border:2px solid black;`

const SearchBox = (props) => {
    const [texto, setTexto] = useState('')

    useEffect(() => {
        if (props.onChangeText) {
            props.onChangeText(texto)
        }
    }, [texto]);

    const handleKeyUp = (e) => {
        if (e.keyCode == 13) {
            if (props.onEnter)
                props.onEnter(texto);
            setTexto('');
        }
    }


    return (
        <>
            <InputText
                type="text"
                value={texto}
                onChange={(e) => { setTexto(e.target.value) }}
                onKeyUp={handleKeyUp}
                placeholder={props.place ?? 'Digite uma nova tarefa'}
            />
        </>
    )
}

export default SearchBox