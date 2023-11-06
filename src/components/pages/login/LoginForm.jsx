import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs"
import TextInput from '../../reusable-ui/TextInput.jsx'
import Button from '../../reusable-ui/Button.jsx'
import index from "../../../index.css?inline"
import { theme } from '../../../theme/index.jsx'
import { fadeInFromBottomLog } from '../../../theme/animations'



export default function LoginForm() {


  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  // Comportement
  const handleSubmit = async (event) => {
    event.preventDefault()
    setUsername("")
    navigate(`/accueil/${username}`)
  }

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  const icon = <img src='/images/logo.png' alt="logo" width="25px" />

  // Affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>BIENVENUE</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <TextInput
        value={username}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        required
        Icon={icon}
        className="input-login"
        version="default"
      />
      <Button
        label={"Se connecter"}
        Icon={<IoChevronForward />}
        version="default"
      />
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px 32px;
  border-radius: ${theme.borderRadius.midRound};
  font-family: ${theme.fonts.family.inter};
  animation: ${fadeInFromBottomLog} ease-out ${theme.animation.speed.verySlow};


  hr{
    border: 1.5px solid ${theme.colors.greyLight};
    margin-bottom: 40px;


  }

  h1{
    letter-spacing: 2px;
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.greyLight};
    font-weight: ${theme.fonts.weights.medium};
  }

  h2{
    color: ${theme.colors.greyLight};
  }  

  .input-login {
    margin: 18px 0;

  }

  @media(max-width: 767px) {
      max-width: 100%;
      min-width: 300px;
      h1{
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.white};
    }

    h2{
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.white};
    }  
  }
`;
