import React from 'react';
import styled from "@emotion/styled";

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    console.log(resultado)

    return (
       <ResultadoDiv>
            <Imgprice>
                <Collogo>
                    <Logo src={	`https://www.cryptocompare.com/${resultado.IMAGEURL}`}></Logo>
                </Collogo>
                <Col>
                    <Precio>
                        {resultado.PRICE}
                        <Info>{"High: "} 
                            <span className="green">
                                {resultado.HIGHDAY}
                            </span>
                        </Info> 
                        <Info> {"Low: "}    
                            <span className="red">
                                {resultado.LOWDAY}
                            </span>
                        </Info> 
                        <Info>{"24hs: "}
                            <span className="grey"> 
                            {resultado.CHANGEPCT24HOUR}%
                            </span>{/* <Info>Last Update: <span className="grey">{resultado.LASTUPDATE}</span> </Info> */}
                        </Info>
                    </Precio>
                </Col>
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
    margin-top:24px ;
    padding: 6px 18px 6px 18px;
    min-height: 13vh;
    max-height: 16vh;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-evenly
`;

const Imgprice = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    justify-content: space-evenly;
    margin-left: 12px;
`
const Collogo = styled.div`
    display: flex;
`
const Col = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;   
`

const Precio = styled.p`
    font-size: 3vh;
    color:black;
    font-weight:bold;
    letter-spacing: -2px;

`
const Info = styled.p`
    margin-top: 2px;
    margin-bottom: 0px;
    color: grey;
    font-size: 1.6vh;
    font-weight:lighter;
    letter-spacing: 0;
    span {
        letter-spacing: -0.9px;
    }
`;

const Logo = styled.img`
    max-height: 100px;
    margin-right: 21px;
`
