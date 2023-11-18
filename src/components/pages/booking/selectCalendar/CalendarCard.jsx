import React from 'react'
import styled from 'styled-components';
import { convertDate } from '../../../../utils/convert';
import Button from '../../../reusable-ui/Button';
import CalendarDate from './CalendarDate';

export default function CalendarCard({ date, events }) {
    const showDate = convertDate(date, "calendar")
    console.log('showDate', showDate);

    return (
        <CalendarCardStyled>
            <CalendarDate date={showDate} />
            {events.map(({ id, time }) => {
                return (
                    <div className="">
                        <Button
                            key={id}
                            label={time}
                        />

                    </div>
                )
            })}
        </CalendarCardStyled>
    )
}

const CalendarCardStyled = styled.div`
display: flex;
flex-direction: column;
  
`;