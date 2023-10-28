import React from 'react'
import styled from 'styled-components';
import Button from '../Button';
import { theme } from '../../../theme';

export default function Right({ time, price }) {
    return (
        <RightStyled>
            <div className='time-price'>{time} {price}</div>
            <Button label="Choisir" className="btn" />
        </RightStyled>
    )
}

const RightStyled = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
.time-price{
    display: inline-block;
}
.btn {
    font-size: ${theme.fonts.size.XS};
    background-color: black;
    width: 80px;
    height: 15px;
}
`;