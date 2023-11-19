import React from 'react'
import Mark from './Mark';
import styled from 'styled-components';
import Infos from './Infos';
import { motion } from 'framer-motion'


export default function Global() {
    return (
        <GlobalStyled
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <Mark />
            <Infos />
        </GlobalStyled>
    )
}

const GlobalStyled = styled.div`
  display: flex;
`;