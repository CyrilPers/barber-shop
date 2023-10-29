import React from 'react'
import styled from 'styled-components';
import Address from '../../../reusable-ui/Address';
import { theme } from '../../../../theme';

export default function Place() {
    return (
        <PlaceStyled>
            <h2>Où se situe le salon ?</h2>
            <Address />
        </PlaceStyled>
    )
}

const PlaceStyled = styled.div`
h2 {
font-weight:${theme.fonts.weights.medium};
margin-bottom: 10px;
}
`;