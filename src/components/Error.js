import React from 'react';
import styled from "@emotion/styled";

const Error = ({mensaje}) => {
    return (
        <MensajeError>
            {mensaje}
        </MensajeError>
    )
}

export default Error

const MensajeError = styled.p`
    color: rgb(255, 44, 44);
    text-transform: uppercase;
    margin-top:33px;
    font-size: 20px;
    letter-spacing: 2px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
`;