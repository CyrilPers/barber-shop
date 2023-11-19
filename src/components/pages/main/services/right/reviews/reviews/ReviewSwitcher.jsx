import React from 'react'
import styled from 'styled-components';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/Gr'
import { theme } from '../../../../../../../theme';

export default function ReviewSwitcher({ setMin, min, setMax, max, reviews }) {

    const stopNext = max > reviews.length
    const stopPrevious = min === 0

    const handlenext = () => {
        if (!stopNext) {
            setMin(min + 5)
            setMax(max + 5)
        }
    }
    const handlePrevious = () => {
        if (!stopPrevious) {
            setMin(min - 5)
            setMax(max - 5)
        }
    }

    return (
        <ReviewSwitcherStyled>
            <div className={`switcher ${stopPrevious && "stop"}`} onClick={handlePrevious}><GrLinkPrevious className='switcher-icon' /> <span>Page précédente</span></div>
            <div className={`switcher ${stopNext && "stop"}`} onClick={handlenext}><span>Page suivante</span> <GrLinkNext className='switcher-icon' /></div>
        </ReviewSwitcherStyled>
    )
}

const ReviewSwitcherStyled = styled.div`
margin-top: 10px;
box-sizing: border-box;
padding: 0 5%;
display: flex;
justify-content: space-between;

    .switcher {
        cursor: pointer;
    }

    .switcher-icon{
        position: relative;
        bottom: -3px;
        opacity: 0.8;
        }

    span {
        font-size: ${theme.fonts.size.SM};
        color: ${theme.colors.lowBlack};
    }
    .stop {
        cursor: not-allowed;
        .switcher-icon{
        opacity: 0.2;
        }
        span {
        color: ${theme.colors.greyLight};
        }
    }
  
`;