import React, { useContext } from 'react'
import styled from 'styled-components';
import { barbers } from '../../../../assets/data/barbers.js'
import BarberCard from '../../../reusable-ui/barberCard/BarberCard.jsx';
import { checkIfIsClicked } from '../../../../utils/helpers.jsx'

export default function BarberList({ handleClick, selectedBarber }) {

    return (
        <BarberListStyled>
            {barbers.map((barber) => {
                return (
                    <div className="barber-card"
                        key={barber.id}
                    >
                        <BarberCard
                            name={barber.name}
                            isSelected={selectedBarber ? checkIfIsClicked(selectedBarber.id, barber.id) : false}
                            onClick={() => handleClick(barber)}
                        />
                    </div>
                )
            })}
        </BarberListStyled>
    )
}

const BarberListStyled = styled.div`
    display: flex;
    margin: 10px -5px; // -5px to remove padding of card and get cards center with other components

    .barber-card {
        width: 100%;
    }
`;
