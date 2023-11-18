import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme';
import Button from '../reusable-ui/Button.jsx'

export default function Profil() {

  const { username } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }

  return (
    <ProfilStyled>
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