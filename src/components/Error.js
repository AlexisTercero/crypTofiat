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
    color: red;
    text-transform: uppercase;
    padding: 1rem;
    font-size: 30px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
`;