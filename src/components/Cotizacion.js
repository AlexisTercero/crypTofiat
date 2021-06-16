import React from 'react';
import styled from "@emotion/styled";

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    console.log(resultado)

    return (
       <ResultadoDiv>
            <Imgprice>
                <Logo src={	`https://www.cryptocompare.com/${resultado.IMAGEURL}`}></Logo><Precio><span>{resultado.PRICE}</span><br></br><Info>High: <span className="green">{resultado.HIGHDAY}</span> Low: <span className="red">{resultado.LOWDAY}</span><Info>24hs:<span className="grey"> {resultado.CHANGEPCT24HOUR}%</span><Info>Last Update: <span className="grey">{resultado.LASTUPDATE}</span> </Info></Info></Info> </Precio>                
            </Imgprice>
       </ResultadoDiv>
    );
}

export default Cotizacion

const ResultadoDiv = styled.div`
    background-image: linear-gradient(to right, white, white,transparent);
    color: black;
    border: none;
    border-radius: 90px 0px 0px 90px;
    /* outline: 0.3px solid blue; */
    font-family: Arial, Helvetica, sans-serif;
    margin-top:24px ;
    padding: 6px 18px 6px 18px;
    min-height: 18.3vh;
    max-height: 18vh;
`;

const Info = styled.p`
    font-size: 18px;
    margin-top: 3px;
    margin-bottom: 0px;
    color: grey;


    span {
        font-weight:bold;
        margin-right: 9px;
    }
`;

const Imgprice = styled.div`
    display: flex;
    align-items: center;
    margin-left: 12px;
`

const Precio = styled.p`
    font-size: 30px;
    color:black;

    span {
        font-weight:bold;
    }
`

const Logo = styled.img`
    max-height: 110px;
    margin-right: 21px;
`
