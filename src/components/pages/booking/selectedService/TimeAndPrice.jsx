import React from 'react'
import styled from 'styled-components';
import { PiDotOutlineFill } from 'react-icons/Pi'
import { theme } from '../../../../theme';

export default function TimeAndPrice({ time, price }) {
    return (
        <TimeAndPriceStyled>
            <span>{time}</span>
            <span><PiDotOutlineFill /></span>
            <span>{price}</span>
        </TimeAndPriceStyled>
    )
}

const TimeAndPriceStyled = styled.div`
margin: 5px 0;
span {
    color: ${theme.colors.lowBlack};
    font-size: ${theme.fonts.size.SM};
}
`;