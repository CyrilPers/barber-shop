import React from 'react'
import styled from 'styled-components';
import ReviewsBlock from './ReviewsBlock';
import Times from './Times';

export default function Right() {
    return (
        <RightStyled>
            <ReviewsBlock />
            <Times />
        </RightStyled>
    )
}

const RightStyled = styled.section`
margin-top: 40px;
width: 30%;
box-sizing: border-box;
padding-left: 20px;
display: flex;
flex-direction: column;
`