import React from 'react'
import styled from '@emotion/styled'

const Footer = () => {
    return (
        <Foot>
            <Contfoot>
                <Row>
                    <Col>
                        <h4>ALEXIS DE ALMEYDA</h4>
                    </Col>
                    <Col>
                        <h4>alexisdealmeyda@gmail.com</h4>
                    </Col>
                    <Col>
                        <h4>GitHub</h4>
                    </Col>
                </Row>
            </Contfoot>           
        </Foot>
    )
}

export default Footer



const Foot = styled.div`
    color:grey;
    background-color: blue;
    padding-top: 0em;
    position: relative;
    bottom: 0;
    width: 100%;
`

const Contfoot = styled.div`
    color:grey;
    font-family: helvetica;
    font-weight: lighter;
`
const Row = styled.div`

`

const Col = styled.div`

`

