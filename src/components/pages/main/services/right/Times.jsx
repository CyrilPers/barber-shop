import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import TimesBlock from './times/TimesBlock';

export default function Times() {
    return (
        <TimesStyled>
            <h1>Horaires d'ouverture</h1>
            <TimesBlock />
        </TimesStyled>
    )
}

const TimesStyled = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    h1{
    font-size: ${theme.fonts.size.P3};
    font-weight: ${theme.fonts.weights.medium};
    margin-bottom: 10px;
    }

`;