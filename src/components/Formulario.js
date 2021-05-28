import React from 'react';
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda"


const Formulario = () => {
    const MONEDAS = [
        { codigo: "USD", nombre: "Dolar Estadounidense" },
        { codigo: "ARS", nombre: "Peso Argento" },
        { codigo: "MXN", nombre: "Peso Mexicano" },
        { codigo: "EUR", nombre: "Euro" },
        { codigo: "GBP", nombre: "Libra Esterlina" },
    ]


    //Utlizar useMoneda
    const [ moneda, SelectMonedas ]= useMoneda("Elige tu moneda", "", MONEDAS);


    return (  
        <form>
            <SelectMonedas />

            <Boton 
                type="submit"
                value="Calcular"
            />
        </form>
    )
}

export default Formulario

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size:20px;
    padding: 10px;
    background-color: grey;
    border: none;
    width: 100%;
    border-radius: 6px;
    color: black;
    transition: background-color .3s ease;

    &:hover {
        background-color: yellow;
        color: black;
        cursor:pointer;
    }

`