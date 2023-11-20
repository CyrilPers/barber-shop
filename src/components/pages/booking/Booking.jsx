import React, { useContext, useState } from 'react'
import Title from '../../reusable-ui/Title';
import { theme } from '../../../theme';
import styled from 'styled-components';
import BookingContext from '../../../context/BookingContext.jsx'
import ChooseBarber from './selectBarber/ChooseBarber.jsx';
import Step from '../../reusable-ui/booking/Step.jsx';
import ChooseDateTime from './selectCalendar/ChooseDateTime.jsx';
import { motion } from 'framer-motion';

export default function Booking() {

    const { calendar, setCalendar, selectedService, setSelectedService, selectedBarber, setSelectedBarber } = useContext(BookingContext)
    const [page, setPage] = useState(0)

    const handleClick = (barber) => {
        setPage(0)
        setSelectedBarber(barber)
        setCalendar(barber.calendar)
    }

    return (
        <BookingStyled as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Title />
            <Step number={1} title={"Prestation sélectionnée"} />
            <ChooseBarber setCalendar={setCalendar} handleClick={handleClick} selectedBarber={selectedBarber} setSelectedBarber={setSelectedBarber} selectedService={selectedService} setSelectedService={setSelectedService} />
            <Step number={2} title={"Choix de la date & heure"} />
            <ChooseDateTime calendar={calendar} page={page} setPage={setPage} />
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
