import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme';
import Button from '../reusable-ui/Button.jsx'
import { motion } from 'framer-motion'

export default function Profil() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }

  return (
    <ProfilStyled as={motion.div}
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}>
      <Button className="disconnect btn default" label="Se déconnecter" onClick={handleClick} />
    </ProfilStyled>
  )
}

const ProfilStyled = styled.div`
display: flex;
align-items: center;
.disconnect {
  width: 130px;
  height: 30px;
  font-size: ${theme.fonts.size.XXS};
}
`;