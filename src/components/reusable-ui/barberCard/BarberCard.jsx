import React from 'react'
import styled, { css } from 'styled-components';
import BarberPic from './BarberPic';
import { theme } from '../../../theme';
import { getFirstLetter } from '../../../utils/helpers.jsx';
import { motion } from 'framer-motion';

export default function BarberCard({ name, isSelected, onClick }) {

    return (
        <BarberCardStyled BarberCardStyled $isSelected={isSelected} onClick={onClick} as={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
            <BarberPic letter={getFirstLetter(name)} />
            <span className='name'>{name}</span>
            <input className="radio" type="radio" checked={isSelected} />
        </BarberCardStyled >
    )
}
const BarberCardStyled = styled.div`
cursor: pointer;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid ${theme.colors.greyLight};
box-sizing: border-box;
padding: 5px 10px;
margin: 0 10px;
border-radius: ${theme.borderRadius.midRound};
input {
  accent-color: ${theme.colors.black};
}

${({ $isSelected }) => $isSelected && selectedStyle}

`;

const selectedStyle = css`
border: 2px solid ${theme.colors.lowBlack};
`