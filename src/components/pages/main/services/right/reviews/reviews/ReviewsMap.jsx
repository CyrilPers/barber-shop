import React from 'react'
import { reviews } from '../../../../../../../assets/data/reviews'
import ReviewCard from './ReviewCard.jsx/ReviewCard';
import styled from 'styled-components';
import { theme } from '../../../../../../../theme';


export default function ReviewsMap() {
    return (
        <ReviewsMapStyled>
            {reviews.slice(0, 5).map(({ id, description, rating, date }) => {
                return (
                    <div className="review-card">
                        <ReviewCard
                            key={id}
                            description={description}
                            rating={rating}
                            date={date}
                        />
                        <div className='border-parent'>
                            <div className='border' />
                        </div>
                    </div>
                )
            })}
        </ReviewsMapStyled>
    )
}


const ReviewsMapStyled = styled.div`
      .border-parent {
        display: flex;
        justify-content: center;
        .border{
        width: 90%;
        border-bottom: 1px solid ${theme.colors.greyLight};}
    }  
`;