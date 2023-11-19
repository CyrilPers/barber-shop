import React from 'react'
import styled from 'styled-components';
import SelectedServiceInfo from './SelectedServiceInfo.jsx';
import { theme } from '../../../../theme/index.jsx';
import { motion } from 'framer-motion';

export default function SelectedService({ setCalendar, setSelectedBarber, selectedService, setSelectedService }) {
    const handleDeleteSelectedService = () => {
        setSelectedBarber()
        setSelectedService()
        setCalendar([])
    }
    return (

        <SelectedServiceStyled>
            <SelectedServiceInfo selectedService={selectedService} />
            <motion.span className='delete' onClick={handleDeleteSelectedService} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1, color: "red" }}>Supprimer</motion.span>
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