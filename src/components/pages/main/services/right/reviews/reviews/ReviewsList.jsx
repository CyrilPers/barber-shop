import React from 'react'

import styled from 'styled-components';
import { theme } from '../../../../../../../theme';
import ReviewsMap from './ReviewsMap';
import ReviewSwitcher from './ReviewSwitcher';

export default function ReviewsList() {
    return (
        <ReviewsListStyled>
            <ReviewsMap />
            <ReviewSwitcher />
        </ReviewsListStyled>
    )
}

const ReviewsListStyled = styled.div`
    display: flex;
    flex-direction: column;
`;