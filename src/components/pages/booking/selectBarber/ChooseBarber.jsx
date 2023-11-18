import React from 'react'
import BarberList from './BarberList.jsx';
import SelectedService from './SelectedService';
import styled from 'styled-components';
import { theme } from '../../../../theme';

export default function ChooseBarber({ selectedBarber, setSelectedService, selectedService, handleClick }) {


    return (
        <ChooseBarberStyled>
            <SelectedService selectedService={selectedService} setSelectedService={setSelectedService} />
            <span className='who'>Avec qui ?</span>
            <BarberList selectedBarber={selectedBarber} handleClick={handleClick} />
        </ChooseBarberStyled>
    )
}

const ChooseBarberStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
box-shadow: ${theme.shadows.medium};
box-sizing: border-box;
padding: 20px 20px;
background-color: white;
border-radius: ${theme.borderRadius.midRound};
`;