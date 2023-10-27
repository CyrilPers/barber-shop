import React from 'react'
import styled from 'styled-components';
import Navbar from '../../header/Navbar.jsx'
import { Route, Routes } from 'react-router-dom';
import Services from './Services.jsx';
import { theme } from '../../../theme/index.jsx';


export default function Main() {
  return (
    <MainStyled>
      <Navbar />
      <Routes>
        <Route path="*" element={<Services />} />
        <Route path="/avis/:username" />
        <Route path="/a-propos/:username" />
      </Routes>
    </MainStyled>
  )
}

const MainStyled = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
