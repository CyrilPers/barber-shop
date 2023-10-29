import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import styled from 'styled-components';
import { theme } from '../../../../../../../../theme';

export default function ReviewCard({ description, rating, date }) {
  return (
    <ReviewCardStyled>
      <div className='rating'><span>{rating}</span> <AiFillStar className='icon' /></div>
      <div className='description'>{description} </div>
      <div className='date'>{date}</div>
    </ReviewCardStyled>
  )
}

const ReviewCardStyled = styled.div`
  padding: 0 5%;
  display:flex;
  flex-direction: column;
  margin: 10px 0;
  .rating {
    span {
      font-size: ${theme.fonts.size.P0};
    }
  }
  .description, .date {
    color: ${theme.colors.lowBlack};
    font-size: ${theme.fonts.size.SM};
  } 
  .icon {
    position: relative;
    bottom: -2px;
  }
`;