import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';

export default function Left({ id, name, description }) {
  return (
    <LeftStyled>
      <p className='title'>{name}</p>
      <p className='description'>{description}</p>
    </LeftStyled>
  )
}


const LeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .title {
    font-size: ${theme.fonts.size.P0};
  }
  .description {
    color: ${theme.colors.lowBlack};
  }
`;