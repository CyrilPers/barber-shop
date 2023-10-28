import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../../theme/index.jsx'
import Global from './global/Global.jsx';

export default function ReviewsBottoms() {
    return (
        <ReviewsBottomsStyled>
            <Global />
        </ReviewsBottomsStyled>
    )
}

const ReviewsBottomsStyled = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 0 0 ${theme.borderRadius.midRound} ${theme.borderRadius.midRound};
  box-sizing: border-box;
  padding: 15px;

`;