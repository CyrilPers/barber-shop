import React, { useState } from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';
import { getWeek } from '../../../../utils/helpers';
import CalendarCard from './CalendarCard';

export default function ChooseDateTime({ calendar }) {

    const [page, setPage] = useState(0)
    const filteredCalendar = getWeek(calendar, page)

    const handleNext = () => {
        setPage(page + 1)
    }

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    console.log('filteredCalendar', filteredCalendar);

    return (
        <ChooseDateTimeStyled>
            {filteredCalendar.map(({ date, events }) => {
                return (
                    <div className="calendarCard">
                        <CalendarCard
                            key={date}
                            date={date}
                            events={events}
                        />
                    </div>
                )
            })}


        </ChooseDateTimeStyled>
    )
};

const ChooseDateTimeStyled = styled.div`
display: flex;
justify-content: space-around;
box-shadow: ${theme.shadows.medium};
box-sizing: border-box;
padding: 20px 20px;
background-color: white;
border-radius: ${theme.borderRadius.midRound};
`;