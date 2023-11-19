import React from 'react'
import styled from 'styled-components';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/Gr'
import { theme } from '../../../../../../../theme';
import { motion } from 'framer-motion';

export default function ReviewSwitcher({ stopNext, stopPrevious, handlenext, handlePrevious }) {

    return (
        <ReviewSwitcherStyled>
            <motion.div {...(!stopPrevious && { whileTap: { scale: 0.8 }, whileHover: { scale: 1.1 } })}
                className={`switcher ${stopPrevious && "stop"}`}
                onClick={handlePrevious}
            >
                <GrLinkPrevious className='switcher-icon' /> <span>Page précédente</span>
            </motion.div>

            <motion.div {...(!stopNext && { whileTap: { scale: 0.8 }, whileHover: { scale: 1.1 } })}
                className={`switcher ${stopNext && "stop"}`}
                onClick={handlenext}
            >
                <span>Page suivante</span> <GrLinkNext className='switcher-icon' />
            </motion.div>
        </ReviewSwitcherStyled>
    );
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