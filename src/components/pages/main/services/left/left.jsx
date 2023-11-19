import React, { useContext } from 'react'
import styled from 'styled-components';
import Place from './Place.jsx'
import Map from './Map.jsx';
import ServicesMapping from './ServicesMapping.jsx';
import About from './About.jsx';
import BookingContext from '../../../../../context/BookingContext.jsx';
import { isEmpty } from '../../../../../utils/array.jsx';
import BookedServices from './bookedServices.jsx/BookedServices.jsx';
import Title from '../Title.jsx';

export default function Left() {

    const { setSelectedService, bookedServices, setBookedServices } = useContext(BookingContext)

    return (
        <LeftStyled>
            {!isEmpty(bookedServices) && <BookedServices bookedServices={bookedServices} setBookedServices={setBookedServices} />}
            <Title />
            <ServicesMapping setSelectedService={setSelectedService} />
            <Place />
            <Map />
            <About />
        </LeftStyled>

    )
}

const LeftStyled = styled.section`
box-sizing: border-box;
padding-right: 20px;
width: 70%;
`;