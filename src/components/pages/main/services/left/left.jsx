import React from 'react'
import styled from 'styled-components';
import Place from './Place.jsx'
import Map from './Map';
import ServicesMapping from './ServicesMapping';
import About from './About.jsx';

export default function Left() {

    return (
        <LeftStyled>
            <ServicesMapping />
            <Place />
            <Map />
            <About />
        </LeftStyled>

    )
}

const LeftStyled = styled.section`
width: 70%;
box-sizing: border-box;
padding-right: 20px;
`;