import React from 'react'
import ReviewsBottoms from './reviews/ReviewsBottom'
import ReviewsHeader from './reviews/ReviewsHeader'
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function ReviewsBlock() {
    return (
        <ReviewsBlockStyled>
            <ReviewsHeader />
            <ReviewsBottoms />
        </ReviewsBlockStyled>
    )
}

const ReviewsBlockStyled = styled.div`
box-shadow: ${theme.shadows.medium};
border-radius: ${theme.borderRadius.midRound};
background-color: white;
`;