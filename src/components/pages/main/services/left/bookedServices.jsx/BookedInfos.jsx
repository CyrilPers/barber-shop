import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { BsScissors } from "react-icons/bs";
import { convertDate } from '../../../../../../utils/convert';

export default function BookedInfos({ date,
    time,
    service,
    price,
    barber }) {
    return (
        <BookedInfosStyled>
            <p className='dateAndTime'>{convertDate(date, "booked")} {time}</p>
            <p className='service'>< BsScissors /> {service}</p>
            <p className='price'><LiaMoneyBillWaveSolid /> {price}</p>
            <p className='barber'><FaRegUser /> avec {barber}</p>
        </BookedInfosStyled>
    )
}


const BookedInfosStyled = styled.div`
display: flex;
flex-direction: column;
.dateAndTime {
    font-size: ${theme.fonts.size.P1};
}
p {
    font-size: ${theme.fonts.size.P0};
}
.barber, .price {
    color: ${theme.colors.lowBlack}
}  
`;