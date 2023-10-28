import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';

export default function Card({ id, name, description, time, price }) {
    return (
        <CardStyled>
            <div>{id}</div>
            <div>{name}</div>
            <div>{description}</div>
            <div>{time} {price}</div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
background-color: white;
border-radius: ${theme.borderRadius.midRound};
box-shadow: ${theme.shadows.medium};
width: 100%;
`;