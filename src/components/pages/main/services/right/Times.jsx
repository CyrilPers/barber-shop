import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function Times() {
    return (
        <TimesStyled>
            <h1>Horraires d'ouverture</h1>
        </TimesStyled>
    )
}

const TimesStyled = styled.div`
    margin-top: 10px;
    h1{
    font-size: ${theme.fonts.size.P3};
    font-weight: ${theme.fonts.weights.medium};
    }
    display: flex;
    flex-direction: column;
`;