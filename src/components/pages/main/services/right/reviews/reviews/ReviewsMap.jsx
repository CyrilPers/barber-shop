import React from 'react'
import ReviewCard from './ReviewCard.jsx/ReviewCard';
import styled from 'styled-components';
import { theme } from '../../../../../../../theme';
import { convertDate } from '../../../../../../../utils/convert';


export default function ReviewsMap({ min, max, reviews }) {

    return (
        <ReviewsMapStyled>
            {reviews.slice(min, max).map(({ id, description, rating, date }) => {
                return (
                    <div className="review-card">
                        <ReviewCard
                            key={id}
                            description={description}
                            rating={rating}
                            date={convertDate(date)}
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