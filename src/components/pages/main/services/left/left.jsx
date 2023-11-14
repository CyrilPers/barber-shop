import React, { useContext } from 'react'
import styled from 'styled-components';
import Place from './Place.jsx'
import Map from './Map.jsx';
import ServicesMapping from './ServicesMapping.jsx';
import About from './About.jsx';
import BookingContext from '../../../../../context/BookingContext.jsx';

export default function Left() {

    const { setSelectedService } = useContext(BookingContext)

    return (
        <LeftStyled>
            <ServicesMapping setSelectedService={setSelectedService} />
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