import React from 'react';
import styled from "@emotion/styled"
import imagen from "./cryptomonedas.png"
import Formulario from "./components/Formulario"
function App() {
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
          Cotizá tus Cryptos al instante!
        </Heading>
        <Formulario />
      </div>      
    </Contenedor>   
  );
}

export default App;

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

`
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
` 
const Heading = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color:white;
  text-align: left;
  font-weight: 900;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: yellow;
    display: block;

  }

`