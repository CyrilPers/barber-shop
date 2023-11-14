import React from 'react'
import styled from 'styled-components';
import Services from './Services.jsx';
import Navbar from '../../header/Navbar.jsx';
import Footer from './Footer.jsx';
import Booking from '../booking/Booking.jsx';
import { useServices } from '../../../hooks/useServices.jsx';
import BookingContext from '../../../context/BookingContext.jsx';


export default function Main() {

  const { selectedService, setSelectedService } = useServices()

  const BookingContextValue = {
    selectedService,
    setSelectedService,
  }

  return (
    <BookingContext.Provider value={BookingContextValue}>
      <MainStyled>
        <Navbar />
        {!selectedService && <Services setSelectedService={setSelectedService} />}
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
