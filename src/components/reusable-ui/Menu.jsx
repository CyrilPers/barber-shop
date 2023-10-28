import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme/index.jsx'
import Card from './Card.jsx';

export default function Menu({ label, services }) {
    return (
        <MenuStyled>
            <p>{label}</p>
            <Card services={services} />

        </MenuStyled>
    )
}

const MenuStyled = styled.div`
margin-top:20px;
padding-left: 10px;
    p {
        font-size: ${theme.fonts.size.P0};
        font-weight: ${theme.fonts.weights.medium};
    }
`;