import React from 'react'
import Mark from './Mark';
import styled from 'styled-components';
import Infos from './Infos';

export default function Global() {
    return (
        <GlobalStyled>
            <Mark />
            <Infos />
        </GlobalStyled>
    )
}

const GlobalStyled = styled.div`
  display: flex;
`;