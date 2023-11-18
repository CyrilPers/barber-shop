import React from 'react'
import styled from 'styled-components'

export default function CalendarDate({ date }) {

    const month = date[0]
    const day = date[1]
    const dayNum = date[2]

    return (
        <CalendarDateStyled>
            {day}
            {dayNum}{month}
        </CalendarDateStyled>
    )
}

const CalendarDateStyled = styled.div`
  
`;