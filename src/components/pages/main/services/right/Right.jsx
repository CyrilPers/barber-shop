import React from 'react'
import styled from 'styled-components';
import Reviews from './Reviews';
import Global from './reviews/Global';

export default function Right() {
    return (
        <RightStyled>
            <Reviews />
            <Global />
        </RightStyled>
    )
}

const RightStyled = styled.section`
width: 30%;
box-sizing: border-box;
padding-left: 20px;
display: flex;
flex-direction: column;
`