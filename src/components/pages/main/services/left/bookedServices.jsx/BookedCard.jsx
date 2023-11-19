import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import BookedInfos from './BookedInfos';
import Button from '../../../../../reusable-ui/Button.jsx'

export default function BookedCard({ bookedService, handleDeleteBooked }) {
    return (
        <BookedCardStyled>
            <BookedInfos {...bookedService} />
            <Button label="Annuler" className="btn default" onClick={() => handleDeleteBooked(bookedService.id)} />
        </BookedCardStyled>
    )
}


const BookedCardStyled = styled.div`
display: flex;
box-sizing: border-box;
padding: 15px 50px;
justify-content: space-between;
align-items: center;
p {
    font-size: ${theme.fonts.size.P0};
}
.barber, .price {
    color: ${theme.colors.lowBlack}
}
.btn {
    font-size: ${theme.fonts.size.XS};
    width: 80px;
    height: 15px;
    margin-left: 10px;
}
`;