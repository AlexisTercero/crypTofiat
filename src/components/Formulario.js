import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda"
import useCriptomoneda from "../hooks/useCriptomoneda"
import Error from "./Error";
import axios from "axios";


const Formulario = () => {
    //state del listado criptomonedas
    const [ listacripto, guardarCriptomonedas ] = useState([]);
    const [ error, guardarError ] = useState(false);

    const MONEDAS = [
        { codigo: "USD", nombre: "Dolar Estadounidense" },
        { codigo: "ARS", nombre: "Peso Argento" },
        { codigo: "MXN", nombre: "Peso Mexicano" },
        { codigo: "EUR", nombre: "Euro" },
        { codigo: "GBP", nombre: "Libra Esterlina" },
    ]


    //Utlizar useMoneda
    const [ moneda, SelectMonedas ]= useMoneda("Elige tu moneda", "", MONEDAS);
   //Utilizar useCriptomoneda
    const [ criptomoneda, SelectCripto ] = useCriptomoneda("Elige tu Criptomoneda","", listacripto);
    //Ejecutar llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

            const resultado = await axios.get(url);

            guardarCriptomonedas(resultado.data.Data)            
        }
        consultarAPI();
    }, []);

    // Cuando usuario hace submit
    const cotizarMoneda = e =>{
        e.preventDefault();
    
        // Validar si ambos campos estan llenos
        if(moneda === "" || criptomoneda === ""){
            guardarError(true);
            return;
        }
        //pasar los datos al componente principal
        guardarError(false);
    }
    return (  
        <form
            onSubmit={cotizarMoneda}
        >
            {error ?<Error mensaje="Todos los campos son obligatorios" />:null}
            <SelectMonedas />
            <SelectCripto />

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