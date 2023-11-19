import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import BookedCard from './BookedCard';

export default function BookedServicesList({ bookedServices, handleDeleteBooked }) {
    return (
        <BookedServicesListStyled>
            {bookedServices.map((bookedService) => {
                console.log('bookedService.id', bookedService);
                return (
                    <div className="">
                        <BookedCard
                            key={bookedService.id}
                            bookedService={bookedService}
                            handleDeleteBooked={handleDeleteBooked}
                        />
                        <div className='border-parent'>
                            <div className='border' />
                        </div>
                    </div>
                )
            })}
        </BookedServicesListStyled >
    )
}

const BookedServicesListStyled = styled.div`
margin-top: 10px;
width: 68%;
box-shadow: ${theme.shadows.medium};
border-radius: ${theme.borderRadius.midRound};
background-color: white;
margin-bottom: 20px;
.border-parent {
        display: flex;
        justify-content: center;
        .border{
        width: 90%;
        border-bottom: 1px solid ${theme.colors.greyLight};}
    }  
`;