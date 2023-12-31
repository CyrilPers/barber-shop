import React from 'react'
import styled from 'styled-components';
import Title from '../../../reusable-ui/Title.jsx'
import Button from '../../../reusable-ui/Button.jsx'

export default function Header() {

    return (
        <HeaderStyled>
            <Title />
            <a href="#booking">
                <Button className="rdv btn default" label="Prendre RDV" />
            </a>
        </HeaderStyled >
    )
}

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;