import React, { useContext } from 'react'
import Title from '../../reusable-ui/Title';
import { theme } from '../../../theme';
import styled from 'styled-components';
import BookingContext from '../../../context/BookingContext.jsx'
import ChooseBarber from './selectedService/ChooseBarber.jsx';
import Step from '../../reusable-ui/booking/Step.jsx';

export default function Booking() {

    const { selectedService, setSelectedService, selectedBarber, setSelectedBarber } = useContext(BookingContext)

    return (
        <BookingStyled>
            <Title />
            <Step number={1} title={"Prestation sélectionnée"} />
            <ChooseBarber selectedBarber={selectedBarber} setSelectedBarber={setSelectedBarber} selectedService={selectedService} setSelectedService={setSelectedService} />
            <Step number={2} title={"Choix de la date & heure"} />
        </BookingStyled>
    )
}

const BookingStyled = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box;
padding: 30px 20%;
width: 100%;
background-color: ${theme.colors.background_white};

`;
