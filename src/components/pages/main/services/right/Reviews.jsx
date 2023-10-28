import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function Reviews() {
    return (
        <ReviewsStyled>
            <div className="choose">
                <div className='note'>Note globale</div>
                <div className='avis'>Avis</div>
            </div>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.div`
background-color: white;
border-radius: ${theme.borderRadius.midRound} ${theme.borderRadius.midRound} 0 0;
width: 100%;
.choose {
    display: flex;
    height: 50px;
}
.note, .avis {
    font-size: ${theme.fonts.size.SM};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    border-bottom: 2px solid ${theme.colors.greyLight};
    &:active {
        border-bottom: 2px solid ${theme.colors.black};
    }
}
.isSelected {
    border-bottom: 2px solid ${theme.colors.black};
}

`;
