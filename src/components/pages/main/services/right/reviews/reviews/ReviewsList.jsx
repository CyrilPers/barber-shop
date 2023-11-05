import React, { useState } from 'react'
import { reviews } from '../../../../../../../assets/data/reviews'
import styled from 'styled-components';
import ReviewsMap from './ReviewsMap';
import ReviewSwitcher from './ReviewSwitcher';

export default function ReviewsList() {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(5)

    return (
        <ReviewsListStyled>
            <ReviewsMap min={min} max={max} reviews={reviews} />
            <ReviewSwitcher setMin={setMin} min={min} setMax={setMax} max={max} reviews={reviews} />
        </ReviewsListStyled>
    )
}

const ReviewsListStyled = styled.div`
    display: flex;
    flex-direction: column;
`;