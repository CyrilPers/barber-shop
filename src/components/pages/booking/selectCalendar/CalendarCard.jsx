import React from 'react'
import styled from 'styled-components';
import CalendarDate from './CalendarDate';
import TimeCard from './TimeCard';

export default function CalendarCard({ date, events, page, handleClick }) {

    return (
        <CalendarCardStyled>
            <CalendarDate date={date} />
            {events.map(({ id, time }) => {
                return (
                    <div className="book-btn">
                        <TimeCard
                            page={page}
                            key={id}
                            time={time}
                            onClick={() => { handleClick(date, time) }}
                        />

                    </div>
                )
            })}
        </CalendarCardStyled>
    )
}

const CalendarCardStyled = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;