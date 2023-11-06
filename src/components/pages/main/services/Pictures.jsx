import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';
import RightTop from './pictures/RightTop.jsx'
import RightBottom from './pictures/RightBottom.jsx'


export default function Pictures() {
    return (
        <PicturesStyled>
            <img className="main-pic" src="../../../../../images/shop1.jpg" alt="pic1" />
            <div className='right'>
                <RightTop />
                <RightBottom />
            </div>
        </PicturesStyled>
    )
}


const PicturesStyled = styled.div`
    margin-top: 30px;
    display: flex;
    .main-pic {
        padding-left: 0;
    }
    img {
        object-fit: cover;
        box-sizing: border-box;
        padding: 5px;
        border-radius: ${theme.borderRadius.extraRound};
        width: 50%;
        height: auto;      
    }

    .right {
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    .pic-bottom {
        padding-bottom: 0;
    }
`;