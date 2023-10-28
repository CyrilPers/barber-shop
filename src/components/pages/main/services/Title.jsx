import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';
import index from '../../../../index.css'

export default function Title() {
    return (
        <TitleStyled>
            <h1>Réserver en ligne pour un RDV chez MONTPEL BARBER</h1>
            <p>24h24 - Confirmation immédiate</p>
            <h1>Choix de la prestation</h1>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    p{
        color:${theme.colors.lowBlack};
        font-size: 16px;
        margin-bottom: 20px;
    }
`;