import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme/index.jsx'
import Card from './Card.jsx';

export default function Menu({ label, services }) {
    return (
        <MenuStyled>
            <p>{label}</p>
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
                    </div>
                )
            })}

        </MenuStyled>
    )
}

const MenuStyled = styled.div`
margin-top:20px;
    p {
        font-size: ${theme.fonts.size.P0};
        font-weight: ${theme.fonts.weights.medium};
    }
`;