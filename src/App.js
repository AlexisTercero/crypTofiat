import React,{ useState, useEffect } from 'react';
import styled from "@emotion/styled"
import axios from "axios";
import imagen from "./crypTOfiat60px.png"
import Formulario from "./components/Formulario"
import Cotizacion from "./components/Cotizacion"
import Spinner from "./components/Spinner"

function App() {
  const [moneda, guardarMoneda] = useState("");
  const [criptomoneda, guardarCriptomoneda] = useState("");
  const [resultado, guardarResultado] = useState ({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(()=>{
    const cotizarCriptomoneda = async () => {
      //evitamos la ejecucion la primera vez
      if(moneda==="") return;
      //Consultar API para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      // Mostrar Spinner
      guardarCargando(true);

      //ocultar el Spinner y mostrar el resultado
      setTimeout(()=>{
        //Cambiar estado de cargando
        guardarCargando(false);

        //Guardar cotizacion
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      },3000);
      
    }
    cotizarCriptomoneda();
  },[moneda, criptomoneda]);

  // Mostrar spinner ó resultado
  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado} />

  return (
    <Contenedor>
      <div>
        <Imagen 
          src={imagen} 
          alt="imagen crypto"
        />
      </div>
      <div>
        <Heading>        
        </Heading>
        <Formulario 
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
      {componente}
      </div>      
    </Contenedor>   
  );
}

export default App;

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width:992px) {
  }
`
const Imagen = styled.img`
  height:60px;
  margin-top: 3rem;
` 
const Heading = styled.h1`
  color: transparent;
  font-size: 1px;

  &::after {
    content: "";
    width: 100%;
    margin-top: 3px;
    height: 2px;
    background-color: blue;
    display: block;
  }
`