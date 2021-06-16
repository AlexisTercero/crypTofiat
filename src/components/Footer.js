import React from 'react'
import styled from '@emotion/styled'

const Footer = () => {
    return (
        <Foot>
            <Contfoot>
                <Row>
                <Colimg>
                    <a href="mailto:alexisdealmeyda@gmail.com" id="logo">
                    <img src="/images/envelope.svg" alt="E-mail" />
                    </a>
                    </Colimg>
                    <Col>
                        <p>ALEXIS DE ALMEYDA © 2021</p>
                    </Col>
                    <Colimg>
                    <a href="https://github.com/AlexisTercero" id="logo">
                    <img src="/images/github.svg" alt="GitHubLogo" />
                    </a>
                    </Colimg>
                </Row>
            </Contfoot>           
        </Foot>
    )
}

export default Footer



const Foot = styled.div`
    color:grey;
    /* background-image: linear-gradient(transparent, blue);; */
    background-color: #000212;
    padding-top: 0.3em;
    position: relative;
    bottom: 0;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
`

const Contfoot = styled.div`
    color:grey;
    font-size: 12px;
    font-style: oblique;
    position: relative;
    padding-left: 9px;
    padding-right: 9px;

`
const Row = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
`
const Colimg = styled.div`
    width: 27px;
    opacity: 50%;
    &:hover{
        opacity: 80%;
    }
`


const Col = styled.div`
    
`

