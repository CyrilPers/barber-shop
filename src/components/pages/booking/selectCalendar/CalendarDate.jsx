import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../theme/index.jsx';
import { capitalizeFirstLetter } from '../../../../utils/helpers.jsx';
import { convertDate } from '../../../../utils/convert.jsx';

export default function CalendarDate({ date }) {

    const calendarDate = convertDate(date, "calendar")
    const month = capitalizeFirstLetter(calendarDate[0])
    const day = capitalizeFirstLetter(calendarDate[1])
    const dayNum = calendarDate[2]

    return (
        <CalendarDateStyled>
            <span className='day'>{day}</span>
            <span className='dayAndMonth'>{dayNum} {month}</span>
        </CalendarDateStyled>
    )
}

const CalendarDateStyled = styled.div`
display: flex;
flex-direction: column;
padding: 0 10px;
align-items: center;
margin-bottom: 10px;
.dayAndMonth {
    display: flex;
    justify-content: center;
    color : ${theme.colors.lowBlack};
    font-size: ${theme.fonts.size.SM};
}
  
`;