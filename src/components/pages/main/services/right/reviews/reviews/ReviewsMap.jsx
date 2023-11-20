import React from 'react'
import ReviewCard from './ReviewCard.jsx/ReviewCard';
import styled from 'styled-components';
import { theme } from '../../../../../../../theme';
import { convertDate } from '../../../../../../../utils/convert';
import { AnimatePresence, motion } from 'framer-motion'


export default function ReviewsMap({ iniX, min, max, reviews }) {

    return (
        <ReviewsMapStyled>
            {reviews.slice(min, max).map(({ id, description, rating, date }) => {
                return (
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={id}
                            initial={{ x: iniX }}
                            animate={{ x: 0 }}
                            // exit={{ x: exitX }}
                            transition={{ ease: 'easeInOut', duration: 0.5 }}
                            className="review-cards">
                            <ReviewCard
                                key={id}
                                description={description}
                                rating={rating}
                                date={convertDate(date)}
                            />
                            <div className='border-parent'>
                                <div className='border' />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )
            })}
        </ReviewsMapStyled >
    )
}


const ReviewsMapStyled = styled.div`
overflow:hidden;
.border-parent {
    display: flex;
    justify-content: center;
    .border{
    width: 90%;
    border-bottom: 1px solid ${theme.colors.greyLight};}
}  
`;