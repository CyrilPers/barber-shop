import React from 'react'
import { theme } from '../../../theme';
import styled from 'styled-components';

export default function Footer() {
    return (

        <FooterStyled>
            <div className='border'></div>
            <div className='copy-parent'>
                <div className='copy'>Copyright © 2023 MONTPL BARBER</div>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
background-color: white;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
height: 100px;
    .border {
        margin-top: 50px;
        width: 70%;
        border-top: 1px solid ${theme.colors.greyLight};
    }
    .copy-parent{
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .copy {
            margin-top: 10px;
            color: ${theme.colors.lowBlack};
            font-size: ${theme.fonts.size.SM};
        }
    }
`;