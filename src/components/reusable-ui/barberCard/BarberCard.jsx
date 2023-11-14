import React from 'react'
import styled from 'styled-components';

export default function BarberCard() {
    return (
        <BarberCardStyled>
            Picture
            Name
            Input select
        </BarberCardStyled>
    )
}
const BarberCardStyled = styled.div`
width: 50%;
`;