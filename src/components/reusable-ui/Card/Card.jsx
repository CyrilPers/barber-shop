import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';
import Right from './Right.jsx';
import Left from './Left.jsx';

export default function Card({ service, handleSelectService }) {
    return (
        <CardStyled>
            <Left name={service.name} description={service.description} />
            <Right service={service} handleSelectService={handleSelectService} />
        </CardStyled>
    )
}

const CardStyled = styled.div`
display: flex;
width: 100%;
box-sizing: border-box;
padding: 15px 5%;
display: flex;
justify-content: space-between;
/* border-bottom: 1px solid ${theme.colors.greyLight}; */
`;