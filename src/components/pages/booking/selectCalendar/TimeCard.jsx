import React from 'react'
import { theme } from '../../../../theme';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function TimeCard({ time, onClick }) {
    return (
        <TimeCardStyled onClick={onClick} as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {time}
        </TimeCardStyled>
    )
}


const TimeCardStyled = styled.div`
margin-bottom: 10px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
height: 35px;
border-radius: ${theme.borderRadius.round};
font-size: ${theme.fonts.size.SM};
font-weight: ${theme.fonts.weights.regular};
color: ${theme.colors.black};
background-color: ${theme.colors.greyVeryLight};
&:hover {
    color: ${theme.colors.lowBlack};
    background-color: ${theme.colors.greyLight};
    transition: all 200ms ease-out;
  }
&:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
}
`;