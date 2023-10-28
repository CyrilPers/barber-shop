import React, { useState } from 'react'
import styled from 'styled-components';
import { menu } from '../../../../../assets/data/menu';
import Menu from '../../../../reusable-ui/Menu';
import { theme } from '../../../../../theme';

export default function Left() {

    return (
        <LeftStyled>
            <Menu label="FORFAITS" services={menu.forfaits} />

        </LeftStyled>
    )
}

const LeftStyled = styled.section`
background-color: white;
box-shadow: ${theme.shadows.medium};
border: 1px solid red;
width: 60%;
`;