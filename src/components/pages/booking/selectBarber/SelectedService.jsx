import React from 'react'
import styled from 'styled-components';
import SelectedServiceInfo from './SelectedServiceInfo.jsx';
import { theme } from '../../../../theme/index.jsx';

export default function SelectedService({ setCalendar, setSelectedBarber, selectedService, setSelectedService }) {
    const handleDeleteSelectedService = () => {
        setSelectedBarber()
        setSelectedService()
        setCalendar([])
    }
    return (

        <SelectedServiceStyled>
            <SelectedServiceInfo selectedService={selectedService} />
            <span className='delete' onClick={handleDeleteSelectedService}>Supprimer</span>
        </SelectedServiceStyled >
    )
}

const SelectedServiceStyled = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
.delete{
    color: ${theme.colors.blue};
    text-decoration: underline;
    cursor: pointer;

}

`;