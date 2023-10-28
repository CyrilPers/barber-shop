import React from 'react'
import styled from 'styled-components';

export default function Global() {
    return (
        <GlobalStyled>
            test
        </GlobalStyled>
    )
}

const GlobalStyled = styled.div`
  width: 100%;
  background-color: white;
`;