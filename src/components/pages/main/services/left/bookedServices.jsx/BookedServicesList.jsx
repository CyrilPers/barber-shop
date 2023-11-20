import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import BookedCard from './BookedCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookedServicesList({ bookedServices, handleDeleteBooked }) {
    return (
        <BookedServicesListStyled>
            {bookedServices.map((bookedService) => {
                return (
                    <AnimatePresence>
                        <motion.div className="booked-services"
                            key={bookedService.id}
                            initial={{ opacity: 1, width: 0 }}
                            animate={{ opacity: 1, width: "100%" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <BookedCard
                                key={bookedService.id}
                                bookedService={bookedService}
                                handleDeleteBooked={handleDeleteBooked}
                            />
                            <div className='border-parent'>
                                <div className='border' />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )
            })}
        </BookedServicesListStyled >
    )
}

const BookedServicesListStyled = styled.div`
margin-top: 10px;
border: 2px solid ${theme.colors.lowBlack};
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