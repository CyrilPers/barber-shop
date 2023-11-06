import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function About() {
    return (
        <AboutStyled>
            <h2>À-propos</h2>
            <div className="description">
                <p>Situé dans le centre de Montpellier, MONTPL BARBER est un salon de coiffure-barbier-visagiste pour hommes.</p>
                <p>Notre barber shop est un véritable havre de paix où vous pourrez vous détendre prendre soin de vous.</p>
                <p>Découvrez notre savoir-faire et notre passion pour le barbering. </p>
            </div>
        </AboutStyled>
    )
}
const AboutStyled = styled.div`
margin-top: 30px;
color: ${theme.colors.lowBlack};
  h2 {
margin-top: 30px;
font-weight:${theme.fonts.weights.medium};
margin-bottom: 10px;
}
.description {
    box-shadow: ${theme.shadows.medium};
    box-sizing: border-box;
    padding: 15px;
    background-color: white;
    border-radius: ${theme.borderRadius.midRound};
    p{
        color: ${theme.colors.lowBlack};
        margin: 15px 0;
        font-size: ${theme.fonts.size.P0};
    }
}
`;
