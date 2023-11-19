import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';
import { deepClone, getWeek } from '../../../../utils/helpers';
import CalendarCard from './CalendarCard';
import CalendarSwitcher from './CalendarSwitcher';
import BookingContext from '../../../../context/BookingContext';
import { useNavigate, useParams } from 'react-router-dom';
import { addItemToArray, isEmpty } from '../../../../utils/array';

export default function ChooseDateTime({ calendar }) {

    const navigate = useNavigate()
    const { username } = useParams()
    const [page, setPage] = useState(0)
    const { setSelectedService, selectedService, selectedBarber, bookedServices, setBookedServices, setSelectedBarber, setCalendar } = useContext(BookingContext)
    const filteredCalendar = getWeek(calendar, page)

    const handleNext = () => {
        setPage(page + 1)
    }

    const handlePrev = () => {
        if (page >= 1) {
            setPage(page - 1)
        }
    }

    const handleClick = (date, time) => {
        const event = {
            "id": new Date(),
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

    console.log('booked', bookedServices);
    return (
        <ChooseDateTimeStyled>
            {!isEmpty(filteredCalendar) && <CalendarSwitcher handleNext={handleNext} handlePrev={handlePrev} page={page} />} {/*Show switchers only if calendar is shown */}
            {filteredCalendar.map(({ date, events }) => {
                return (
                    <div className="calendarCard">
                        <CalendarCard
                            key={date}
                            date={date}
                            events={events}
                            handleClick={handleClick}
                        />
                    </div>
                )
            })}


        </ChooseDateTimeStyled>
    )
};

const ChooseDateTimeStyled = styled.div`
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