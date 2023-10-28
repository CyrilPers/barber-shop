import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme/index.jsx'
import Card from './card/Card.jsx';

export default function Menu({ label, services }) {
    return (
        <MenuStyled>
            <p className='category-title'>{label}</p>
            <div className='list'>
                {services.map(({ id, name, description, time, price }) => {
                    return (
                        <div className="service-card">
                            <Card
                                key={id}
                                name={name}
                                description={description}
                                time={time}
                                price={price}
                            />
                            <div className='border-parent'>
                                <div className='border' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
margin-top:20px;
    p {
        font-size: ${theme.fonts.size.P0};
        font-weight: ${theme.fonts.weights.medium};
    }
    .list {
        background-color: white;
        border-radius: ${theme.borderRadius.midRound};
        box-shadow: ${theme.shadows.medium};
    }
    .border-parent {
        display: flex;
        justify-content: center;
        .border{
        width: 90%;
        border-bottom: 1px solid ${theme.colors.greyLight};}
    }
    .category-title {
        font-size: ${theme.fonts.size.P2};
        font-weight: ${theme.fonts.weights.medium};
        margin-bottom: 10px;
    }
`;