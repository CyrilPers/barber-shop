import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function Map() {
  return (
    <MapStyled>
      <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.7810808745858!2d3.8767291!3d43.61109959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af08175488cd%3A0x132ffc5cde558cb0!2s34%20Pl.%20Martyrs%20de%20la%20R%C3%A9sistance%2C%2034000%20Montpellier!5e0!3m2!1sfr!2sfr!4v1698592126741!5m2!1sfr!2sfr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </MapStyled>
  )
}

const MapStyled = styled.div`
margin-top: 20px;
display: flex;
box-shadow: ${theme.shadows.medium};
width: 100%;
  .map {
    border: none;
    border-radius: ${theme.borderRadius.midRound};
    width: 100%;
  }
`;