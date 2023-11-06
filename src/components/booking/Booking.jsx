import React from 'react'
import Title from '../reusable-ui/Title';
import Address from '../reusable-ui/Address';
import { theme } from '../../theme';
import styled from 'styled-components';
import { useServices } from '../../hooks/useServices';
import BookingContext from '../../context/BookingContext';

export default function Booking() {

    const { selectedService, setSelectedService } = useServices()

    const BookingContextValue = {
        selectedService,
        setSelectedService,
    }

    return (
        <BookingStyled>
            <Title />
            <Address />
        </BookingStyled>
    )
}

const BookingStyled = styled.div`
width: 70%;
display: flex;
flex-direction: column;
box-sizing: border-box;
padding: 30px 15%;
width: 100%;
background-color: ${theme.colors.background_white};
`;
