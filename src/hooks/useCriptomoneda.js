import React, { Fragment, useState } from 'react'
import styled from "@emotion/styled";


const useCriptomoneda = (label, stateInicial, opciones) => {
    //State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SelectCripto = () => (
        <Fragment>
           <Label>{}</Label> 
            <Select
                onChange={ e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">- Cryptocurrencies -</option>
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select> 
        </Fragment>
    );
    //Retornar state, interfaz y funcion que modifica el state.
    return [state, SelectCripto, actualizarState]
}

export default useCriptomoneda;

const Label = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    color: grey;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    --webkit-appearance: none;
    border: 1px solid rgba(0, 191, 255, 0.9);
    font-size: 1.1rem;
    font-weight: 100 ;
    color: white;
    background-color: transparent;
    

    &:focus-visible{
        outline:0.3px solid blue;
    }
    
`