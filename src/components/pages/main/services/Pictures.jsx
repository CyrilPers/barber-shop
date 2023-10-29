import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';

export default function Pictures() {
    return (
        <PicturesStyled>
            <img className="main-pic" src="../../../../../images/shop1.jpg" alt="pic1" />
            <div className='right'>
                <div className='top'>
                    <img src="../../../../../images/shop4.jpg" alt="pic2" />
                    <img src="../../../../../images/shop3.jpg" alt="pic3" />
                </div>
                <div className='bottom'>
                    <img className="pic-bottom" src="../../../../../images/shop2.jpg" alt="pic4" />
                    <img className="pic-bottom" src="../../../../../images/shop7.jpg" alt="pic5" />
                </div>
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