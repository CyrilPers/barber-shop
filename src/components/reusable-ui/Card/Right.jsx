import React from 'react'
import styled from 'styled-components';
import Button from '../Button';
import { theme } from '../../../theme';
import { PiDotOutlineFill } from 'react-icons/Pi'
import { convertTime } from '../../../utils/convert.jsx';

export default function Right({ service, handleSelectService }) {
    return (
        <RightStyled>
            <div className='time'>{convertTime(service.time)}</div>
            <div className='time'><PiDotOutlineFill /></div>
            <div className='price'>{service.price}</div>
            <Button label="Choisir" className="btn" onClick={() => handleSelectService(service)} />
        </RightStyled>
    )
}

const RightStyled = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
.time, .price{
    display: inline-block;
    margin-right: 10px;
    color: ${theme.colors.lowBlack};
    font-size: ${theme.fonts.size.XS};
}
.btn {
    font-size: ${theme.fonts.size.XS};
    background-color: black;
    width: 80px;
    height: 15px;
    margin-left: 10px;
}
`;