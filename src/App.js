import React,{ useState, useEffect } from 'react';
import styled from "@emotion/styled"
import axios from "axios";
import imagen from "./crypTOfiat.svg"
import Formulario from "./components/Formulario"
import Cotizacion from "./components/Cotizacion"
import Footer from "./components/Footer"
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
    <Pagecont>
    <Contenedor>
      <Imgcont>
        <Imagen 
          src={imagen} 
          alt="imagen crypto"
        />
      </Imgcont>
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
    <Footer /> 
    </Pagecont>
  );
}

export default App;

const Pagecont = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
`

const Contenedor = styled.div`
  max-width: 60vw;
  min-width: 60vw;
  margin: 0 auto;
  margin-top: 3rem;
  flex:1;

  @media (min-width:992px) {
  }
`
const Imgcont = styled.div`
`

const Imagen = styled.img`
  max-width:24vw;
  min-width: 175px;
  margin-top: 0rem;
` 

const Heading = styled.h1`
  color: transparent;
  font-size: 1px;

  &::after {
    content: "";
    width: 100%;
    margin-top: 3px;
    height: 2px;
    background-image: linear-gradient(to right,rgb(0, 34, 255), transparent);
    display: block;
  }
`