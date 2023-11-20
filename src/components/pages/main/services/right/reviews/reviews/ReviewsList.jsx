import React, { useState } from 'react'
import { reviews } from '../../../../../../../assets/data/reviews'
import styled from 'styled-components';
import ReviewsMap from './ReviewsMap';
import ReviewSwitcher from './ReviewSwitcher';
import { motion } from 'framer-motion';

export default function ReviewsList() {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(5)
    const [iniX, setIniX] = useState()

    const stopNext = max > reviews.length
    const stopPrevious = min === 0

    const handlenext = () => {
        if (!stopNext) {
            setIniX(300)
            setMin(min + 5)
            setMax(max + 5)
        }
    }
    const handlePrevious = () => {
        if (!stopPrevious) {
            setIniX(-300)
            setMin(min - 5)
            setMax(max - 5)
        }
    }

    return (
        <ReviewsListStyled as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ReviewsMap iniX={iniX} min={min} max={max} reviews={reviews} />
            <ReviewSwitcher stopNext={stopNext} stopPrevious={stopPrevious} handlePrevious={handlePrevious} handlenext={handlenext} />
        </ReviewsListStyled>
    )
}

const ReviewsListStyled = styled.div`
display: flex;
flex-direction: column;
`;