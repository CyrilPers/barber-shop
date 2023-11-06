import React from 'react'
import LoginForm from './LoginForm.jsx'
import { styled } from 'styled-components'
import Logo from '../../reusable-ui/Logo.jsx'
import index from '../../../index.css?inline'
import { theme } from '../../../theme/index.jsx'

export default function LoginPage() {

  return (
    <LoginPageStyled>
      <Logo className="logo-login-page" />
      <LoginForm />
    </LoginPageStyled>

  )
}

const LoginPageStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: 
        linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
        url('/images/background.jpg') fixed center/cover;
    
    .logo-login-page {
      transform: scale(3);
      h1 {
        text-shadow: 1px 0px 5px #ffffff7f; /* Effet d'ombre */

      }
    }

    @media(max-width: 767px) {
      max-width: 100%
    }
`;