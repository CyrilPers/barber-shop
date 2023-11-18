import React from 'react'
import styled from 'styled-components';
import { convertTime } from '../../../../utils/convert.jsx'
import TimeAndPrice from './TimeAndPrice.jsx';

export default function SelectedService({ selectedService }) {
    return (
        <SelectedServiceStyled>
            <span>{selectedService.name}</span>
            <TimeAndPrice time={convertTime(selectedService.time)} price={selectedService.price} />
        </SelectedServiceStyled >
    )
}

const SelectedServiceStyled = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;

`;