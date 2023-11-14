import React from 'react'
import styled from 'styled-components';
import { barbers } from '../../../assets/data/barbers'
import { theme } from '../../../theme';
import BarberCard from '../../reusable-ui/barberCard/BarberCard';

export default function ChooseBarber() {


    return (
        <ChooseBarberStyled>
            {barbers.map((barber) => {
                return (
                    <div className="barber-card"
                        key={barber.id}
                    >
                        <BarberCard
                            barber={barber}
                        />
                    </div>
                )
            })}
        </ChooseBarberStyled>
    )
}

const ChooseBarberStyled = styled.div`

    display: flex;
    justify-content: space-around;
    box-shadow: ${theme.shadows.medium};
    box-sizing: border-box;
    padding: 15px;
    background-color: white;
    border-radius: ${theme.borderRadius.midRound};
    .barber-card {
        height: 60px;
        margin: 0 5px;
        width: 100%;
        border-radius: ${theme.borderRadius.midRound};
        border: 1px solid red;
        max-width: 300px;
    }
`;