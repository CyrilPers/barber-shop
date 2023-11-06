import React from 'react'
import styled from 'styled-components';
import ChooseBarber from './ChooseBarber';

export default function ChooseService() {
  return (
    <ChooseServiceStyled>
      <h1>Prestation sélectionnée</h1>
      <ChooseBarber />

    </ChooseServiceStyled>
  )
}

const ChooseServiceStyled = styled.div`
display: flex;
flex-direction: column;  
`;
