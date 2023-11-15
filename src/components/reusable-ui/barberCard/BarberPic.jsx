import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';

export default function BarberPic({ letter }) {
    return (
        <BarberPicStyled>
            <span className='letter'>{letter}</span>
        </BarberPicStyled>
    )
}

const BarberPicStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${theme.colors.black};
height: 50px;
width: 50px;
border-radius: ${theme.borderRadius.circle};
.letter{
    color: ${theme.colors.white};
}
`;