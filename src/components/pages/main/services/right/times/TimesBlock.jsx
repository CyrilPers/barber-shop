import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import { times } from '../../../../../../assets/data/times'
import TimesCard from '../../../../../reusable-ui/times-card/timesCard';

export default function TimesBlock() {
    return (
        <TimesBlockStyled>
            {times.map(({ id, day, hours }) => {
                return (
                    <div className="">
                        <TimesCard
                            key={id}
                            day={day}
                            hours={hours}
                        />
                        <div className='border-parent'>
                            <div className='border' />
                        </div>
                    </div>
                )
            })}
        </TimesBlockStyled>
    )
}

const TimesBlockStyled = styled.div`
width: 100%;
background-color: white;
border-radius: ${theme.borderRadius.midRound};
box-shadow: ${theme.shadows.medium};
    .border-parent {
        display: flex;
        justify-content: center;
        .border{
        width: 90%;
        border-bottom: 1px solid ${theme.colors.greyLight};}
    }
`;