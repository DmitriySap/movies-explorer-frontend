import React from 'react';
import './MoviesCard.css';
import card from '../../images/card1.png';

function MoviesCard() {
    return (
        <div className="card-container">
            <p className="card-container__save-button">Сохранить</p>
            <img src={card} alt="Обложка фильма" className="card-container__image"></img>
            <div className="card-container__footer">
                <p className="card-container__movie-title">33 слова о дизайне</p>
                <p className="card-container__movie-time">1ч 17м</p>
            </div>
        </div>
    )
}

export default MoviesCard;