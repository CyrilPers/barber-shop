import React from 'react'
import styled from 'styled-components';
import Services from './Services.jsx';
import Navbar from '../../header/Navbar.jsx';
import Footer from './Footer.jsx';
import Booking from '../booking/Booking.jsx';
import { useServices } from '../../../hooks/useServices.jsx';
import BookingContext from '../../../context/BookingContext.jsx';
import { useBarbers } from '../../../hooks/useBarbers.jsx';
import { useBooked } from '../../../hooks/useBooked.jsx';
import { useCalendar } from '../../../hooks/useCalendar.jsx';
import { motion } from 'framer-motion';


export default function Main() {

  const { selectedService, setSelectedService } = useServices()
  const { selectedBarber, setSelectedBarber } = useBarbers()
  const { bookedServices, setBookedServices } = useBooked()
  const { calendar, setCalendar } = useCalendar()

  const BookingContextValue = {
    selectedService,
    setSelectedService,
    selectedBarber,
    setSelectedBarber,
    bookedServices,
    setBookedServices,
    calendar,
    setCalendar
  }

  return (
    <BookingContext.Provider value={BookingContextValue}>
      <MainStyled as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        {!selectedService && <Services />}
        {selectedService && <Booking />}
        <Footer />
      </MainStyled>
    </BookingContext.Provider>
  )
}

const MainStyled = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`;
