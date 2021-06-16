import React from 'react';
import styled from "@emotion/styled";

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    console.log(resultado)

    return (
       <ResultadoDiv>
            <Imgprice>
                <Logo src={	`https://www.cryptocompare.com/${resultado.IMAGEURL}`}></Logo><Precio><span>{resultado.PRICE}</span><br></br><Info>High: <span className="green">{resultado.HIGHDAY}</span> Low: <span className="red">{resultado.LOWDAY}</span> 24hs</Info> </Precio>
                
            </Imgprice>
            
            <Info>24hs: <span>{resultado.CHANGEPCT24HOUR}%</span> </Info>
            <Info>Last Update: <span>{resultado.LASTUPDATE}</span> </Info>
       </ResultadoDiv>
    );
}

export default Cotizacion

const ResultadoDiv = styled.div`
    background:transparent;
    color: white;
    border: 1px solid rgba(49, 216, 255, 1);
    /* outline: 0.3px solid blue; */
    font-family: Arial, Helvetica, sans-serif;
    margin-top:24px ;
    padding: 6px 18px 18px 18px;
`;

const Info = styled.p`
    font-size: 18px;
    margin-top: 3px;
    margin-bottom: 0px;


    span {
        font-weight:bold;
        margin-right: 9px;
    }
`;

const Imgprice = styled.div`
    display: flex;
    align-items: center;
`

const Precio = styled.p`
    font-size: 30px;

    span {
        font-weight:bold;
    }
`

const Logo = styled.img`
    max-height: 120px;
    margin-right: 12px;
`
