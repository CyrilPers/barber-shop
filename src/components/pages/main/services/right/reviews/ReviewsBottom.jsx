import React from 'react'
import styled from 'styled-components';
import Global from './global/Global.jsx';
import ReviewsList from './reviews/ReviewsList.jsx';

export default function ReviewsBottoms({ isSelected }) {
    return (
        <ReviewsBottomsStyled>
            {isSelected === "global" && <Global />}
            {isSelected === "reviews" && <ReviewsList />}
        </ReviewsBottomsStyled>
    )
}

const ReviewsBottomsStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
`;