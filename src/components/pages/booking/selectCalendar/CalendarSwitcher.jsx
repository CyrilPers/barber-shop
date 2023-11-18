import React from 'react'
import styled from 'styled-components';
import { GrNext, GrPrevious } from "react-icons/gr";

export default function CalendarSwitcher({ handleNext, handlePrev, page }) {
    return (
        <CalendarSwitcherStyled>
            <GrPrevious className={`previous icon ${page === 0 && 'stop'}`} onClick={handlePrev} />
            <GrNext className='next icon' onClick={handleNext} />
        </CalendarSwitcherStyled>
    )
}

const CalendarSwitcherStyled = styled.div`
margin-top: 30px;
width: 100%;
position: relative;
position: absolute;
display: flex;
.icon {
    cursor: pointer;
    width: 25px;
    height: 25px;
}

.previous{
    position: absolute;
    left: 20px;
}
.stop{
    cursor: not-allowed;
    opacity: 0.2;
}
.next{
    position: absolute;
    right: 20px;
}
`;