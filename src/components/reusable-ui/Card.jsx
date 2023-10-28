import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';
import Right from './Card/Right';
import Left from './Card/Left';

export default function Card({ id, name, description, time, price }) {
    return (
        <CardStyled>
            <Left id={id} name={name} description={description} />
            <Right time={time} price={price} />
        </CardStyled>
    )
}

const CardStyled = styled.div`
background-color: white;
border-radius: ${theme.borderRadius.midRound};
box-shadow: ${theme.shadows.medium};
width: 100%;
box-sizing: border-box;
padding: 15px;
display: flex;
justify-content: space-between;
`;