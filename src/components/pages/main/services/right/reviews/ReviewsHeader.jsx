import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../../theme';

export default function ReviewsHeader({ setIsSelected, isSelected }) {

    const handleClick = (tab) => {
        setIsSelected(tab)
    }

    return (
        <ReviewsHeaderStyled >
            <div className="choose">
                <div className={`global ${isSelected === "global" && "isSelected"}`} id='global' onClick={() => handleClick("global")}>Note globale</div>
                <div className={`reviews ${isSelected === "reviews" && "isSelected"}`} id='reviews' onClick={() => handleClick("reviews")}>Avis</div>
            </div>
        </ReviewsHeaderStyled >
    )
}

const ReviewsHeaderStyled = styled.div`
width: 100%;
.choose {
    display: flex;
    height: 50px;
}
.global, .reviews {
    font-size: ${theme.fonts.size.SM};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    border-bottom: 2px solid ${theme.colors.greyLight};
    &:active {
        border-bottom: 2px solid ${theme.colors.black};
    }
}
.isSelected {
    border-bottom: 2px solid ${theme.colors.black};
}

`;
