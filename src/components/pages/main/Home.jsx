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
      <MainStyled>
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
