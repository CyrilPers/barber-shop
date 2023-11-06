import React, { useState } from 'react'
import ReviewsBottoms from './reviews/ReviewsBottom'
import ReviewsHeader from './reviews/ReviewsHeader'
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function ReviewsBlock() {

    const [isSelected, setIsSelected] = useState("global");

    return (
        <ReviewsBlockStyled id="reviews">
            <ReviewsHeader isSelected={isSelected} setIsSelected={setIsSelected} />
            <ReviewsBottoms isSelected={isSelected} setIsSelected={setIsSelected} />
        </ReviewsBlockStyled>
    )
}

const ReviewsBlockStyled = styled.div`
box-shadow: ${theme.shadows.medium};
border-radius: ${theme.borderRadius.midRound};
background-color: white;
`;