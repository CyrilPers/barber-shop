import React from 'react'
import { theme } from '../../../theme';
import styled from 'styled-components';

export default function Step({ number, title }) {
    return (
        <StepStyled>
            <span className='step1'>{number}.</span>
            <span className='selectedService'>{title}</span>
        </StepStyled >
    )
}
const StepStyled = styled.div`
display: inline-block;
margin: 20px 0;

.step1{
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.greyMedium};
    margin-right: 5px;
}
.selectedService{
    margin: 15px 0;
    font-size: ${theme.fonts.size.P3};
}
`;