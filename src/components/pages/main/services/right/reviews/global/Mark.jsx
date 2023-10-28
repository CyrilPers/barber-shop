import React from 'react'
import { theme } from '../../../../../../../theme';
import styled from 'styled-components';

export default function Mark() {
    return (
        <MarkStyled>
            <p>4.9</p>
        </MarkStyled>
    )
}

const MarkStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 20%;
    background-color: ${theme.colors.black};
    border-radius: ${theme.borderRadius.midRound} 0 0 ${theme.borderRadius.midRound};

    p {
        font-size: ${theme.fonts.size.P3};
    }
`;