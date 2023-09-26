import React from 'react';
import './Card.css';

const Card = ({ title, link, card, onCardClick }) => {
    return (
        <div className='card'>
            <img className='card__image' src={link} alt={title} onClick={() => onCardClick(card)}></img>
        </div>
    )
}

export default Card;