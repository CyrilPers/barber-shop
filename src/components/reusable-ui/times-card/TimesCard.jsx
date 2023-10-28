import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';

export default function TimesCard({ day, hours }) {
    return (
        <TimesCardStyled>
            <p>{day}</p>
            <p className='hours'>{hours}</p>
        </TimesCardStyled>
    )
}

const TimesCardStyled = styled.div`
padding: 0 5%;
display: flex;
margin: 10px 0;
justify-content: space-between;
    p{
        color: ${theme.colors.lowBlack};
        font-size: ${theme.fonts.size.P0}
    }
    .hours {
        color: black;
    }
    .isClosed {
        .hours {
        color: ${theme.colors.lowBlack};
        }
    }
`;