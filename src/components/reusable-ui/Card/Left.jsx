import React from 'react'
import styled from 'styled-components';

export default function Left({ id, name, description }) {
    return (
        <LeftStyled>
            <p>{name}</p>
            <p>{description}</p>
        </LeftStyled>
    )
}


const LeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;