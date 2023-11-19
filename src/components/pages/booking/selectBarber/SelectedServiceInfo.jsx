import React from 'react'
import styled from 'styled-components';
import { convertTime } from '../../../../utils/convert';
import TimeAndPrice from './TimeAndPrice';

export default function SelectedServiceInfo({ selectedService }) {
    return (
        <SelectedServiceInfoStyled>
            <span>{selectedService.name}</span>
            <TimeAndPrice time={convertTime(selectedService.time)} price={selectedService.price} />
        </SelectedServiceInfoStyled>
    )
}

const SelectedServiceInfoStyled = styled.div`
  display: flex;
flex-direction: column;
margin-bottom: 10px;
`;