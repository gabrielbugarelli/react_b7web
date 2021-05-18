import React, { useState } from 'react'
import st from 'styled-components'

//Styled Components
const ModalBackGround = st.div`
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    z-index:90;
    background-color:rgba(0,0,0, 0.7);
    display:flex;
    justify-content:center;
    align-items:center;
`;
const ModalArea = st.div`
    background-color:white;
    padding:10px;
`;

const Modal = (props) => {
    const handleBackgroundClick = () => {
        props.setVisible(false)
    }


    return (

        <>
            {props.visible === true &&
                <ModalBackGround onClick={handleBackgroundClick}>
                    <ModalArea>
                        {props.children}
                    </ModalArea>
                </ModalBackGround>
            }
        </>

    )
}

export default Modal;