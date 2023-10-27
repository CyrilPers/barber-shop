import React from 'react'
import LoginForm from './LoginForm.jsx'
import { styled } from 'styled-components'
import Logo from '../../reusable-ui/Logo.jsx'


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
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('/images/background.jpg') fixed center/cover;
    
    .logo-login-page {
      transform: scale(3);
    }

    @media(max-width: 767px) {
      max-width: 100%
    }
`;