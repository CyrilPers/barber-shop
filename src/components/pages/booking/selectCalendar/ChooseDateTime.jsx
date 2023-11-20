import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';
import { deepClone, getWeek } from '../../../../utils/helpers';
import CalendarCard from './CalendarCard';
import CalendarSwitcher from './CalendarSwitcher';
import BookingContext from '../../../../context/BookingContext';
import { useNavigate, useParams } from 'react-router-dom';
import { addItemToArray, isEmpty } from '../../../../utils/array';
import { AnimatePresence, motion } from 'framer-motion'


export default function ChooseDateTime({ calendar, setPage, page }) {

    const navigate = useNavigate()
    const { username } = useParams()
    const { setSelectedService, selectedService, selectedBarber, bookedServices, setBookedServices, setSelectedBarber, setCalendar } = useContext(BookingContext)
    const filteredCalendar = getWeek(calendar, page)
    const [iniX, setIniX] = useState()

    const handleNext = () => {
        setPage(page + 1)
        setIniX(300)
    }

    const handlePrev = () => {
        if (page >= 1) {
            setPage(page - 1)
            setIniX(-300)
        }
    }

    const handleClick = (date, time) => {
        const event = {
            "id": Date.now(),
            "service": selectedService.name,
            "price": selectedService.price,
            "barber": selectedBarber.name,
            "date": date,
            "time": time,
        }
        let bookedServicesCopy = deepClone(bookedServices)
        bookedServicesCopy = addItemToArray(event, bookedServicesCopy)
        setBookedServices(bookedServicesCopy)
        setSelectedService(null)
        setSelectedBarber(null)
        setCalendar([])
        navigate(`/accueil/${username}`);
    }

    return (
        <ChooseDateTimeStyled>
            {!isEmpty(filteredCalendar) && <CalendarSwitcher handleNext={handleNext} handlePrev={handlePrev} page={page} />} {/*Show switchers only if calendar is shown */}
            {filteredCalendar.map(({ date, events }) => {
                return (
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={date}
                            initial={{ x: iniX }}
                            animate={{ x: 0 }}
                            transition={{ ease: 'easeInOut', duration: 0.5 }}
                            className="calendarCard">
                            <CalendarCard
                                key={date}
                                date={date}
                                events={events}
                                handleClick={handleClick}
                            />
                        </motion.div>
                    </AnimatePresence>
                )
            })}
        </ChooseDateTimeStyled >
    )
};

const ChooseDateTimeStyled = styled.div`
overflow: hidden;
position: relative;
width: 100%;
box-sizing:border-box;
display: grid;
grid-template-columns: repeat(7, 1fr);
gap: 10px;
box-shadow: ${theme.shadows.medium};
box-sizing: border-box;
padding: 20px 50px;
background-color: white;
border-radius: ${theme.borderRadius.midRound};
`;