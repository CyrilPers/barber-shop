import React from 'react'
import styled from 'styled-components';
import Title from '../../../reusable-ui/Title.jsx'
import Button from '../../../reusable-ui/Button.jsx'

export default function Header() {
    return (
        <HeaderStyled>
            <Title />
            <Button className="rdv" label="Prendre RDV" />
        </HeaderStyled>
    )
}


const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;