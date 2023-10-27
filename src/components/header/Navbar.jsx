import React from 'react'
import Logo from '../reusable-ui/Logo';
import styled from 'styled-components';
import Profil from './Profil';
import { theme } from '../../theme';

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo className={"logo"} />
      <Profil />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  padding: 10px 15%;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.white};
  .logo {
    h1{color: black;}
  }
`;