import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda"
import useCriptomoneda from "../hooks/useCriptomoneda"
import Error from "./Error";
import axios from "axios";


const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {
    //state del listado criptomonedas
    const [ listacripto, guardarCriptomonedas ] = useState([]);
    const [ error, guardarError ] = useState(false);

    const MONEDAS = [
        { codigo: "USD", nombre: "United States Dollar $ (USD)" },
        { codigo: "ARS", nombre: "Argentine Peso $ (ARS)" },
        { codigo: "PYG", nombre: "Paraguayan Guaraní ₲ (PYG)" },
        { codigo: "MXN", nombre: "Mexican Peso $ (MXN)" },
        { codigo: "EUR", nombre: "Euro € (EUR)" },
        { codigo: "GBP", nombre: "Pound Sterling £ (GBP)" },
        { codigo: "JPY", nombre: "Japanese Yen ¥ (JPY)" },
        { codigo: "CRC", nombre: "Costa Rican Colón ₡ (CRC)" },
        { codigo: "CAD", nombre: "Canadian Dollar $ (CAD)" },
    ]


    //Utlizar useMoneda
    const [ moneda, SelectMonedas ]= useMoneda("Elige tu moneda", "", MONEDAS);
   //Utilizar useCriptomoneda
    const [ criptomoneda, SelectCripto ] = useCriptomoneda("Elige tu Criptomoneda","", listacripto);
    //Ejecutar llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD"

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
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }
    return (  
        <form
            onSubmit={cotizarMoneda}
        >
            {error ?<Error mensaje="ALL FIELDS ARE REQUIRED" />:null}
            <SelectCripto />
            <SelectMonedas />
            <Boton 
                type="submit"
                value="CONVERT"
            />
        </form>
    )
}

export default Formulario

const Boton = styled.input`
    margin-top: 36px;
    font-weight: bold;
    font-size:20px;
    padding: 10px;
    background-color: transparent;
    background-image: linear-gradient(to right, transparent, rgb(0, 34, 255));
    border-radius: 0px 90px 90px 0px;
    border:none;
    width: 100%;
    color: #b0bdff;
    transition: 250ms;


    &:hover {
        background-image: linear-gradient(to right, transparent, #31d8ff);
        color: white;
        cursor:pointer;
        letter-spacing: 1px;
    }

    &:focus-visible{
        border:1px solid rgba(49, 216, 255, 0.9);
        border-radius: 0px 90px 90px 0px;
        outline:none;
        -moz-outline-radius: 50px;
    }
`
