import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../theme/index.jsx';

export default function CalendarDate({ date }) {

    const month = date[0].charAt(0).toUpperCase() + date[0].slice(1);
    const day = date[1].charAt(0).toUpperCase() + date[1].slice(1);
    const dayNum = date[2]

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
.dayAndMonth {
    display: flex;
    justify-content: center;
    color : ${theme.colors.lowBlack};
    font-size: ${theme.fonts.size.SM};
}
  
`;