import React, { useRef } from 'react';
import './MoviesCard.css';
import card from '../../images/card1.png';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ imageUrl, titleRU, titleEN, duration, trailerLink }) => {
    let location = useLocation();
    const hover = useRef('hover');

    const onHover = () => {
        hover.current.style.visibility = 'visible';
    };
    const onExit = () => {
        hover.current.style.visibility = 'hidden';
    };

    return (
        <div className="card-container">
            <p className="card-container__save-button">Сохранить</p>
            <a className="card-container__trailer-link" href={trailerLink} target="_black">
                <img src={`https://api.nomoreparties.co${imageUrl}`} alt="Обложка фильма" className="card-container__image"></img>
            </a>
            <div className="card-container__footer">
                <p className="card-container__movie-title">{titleRU || titleEN}</p>
                <p className="card-container__movie-time">{duration} мин.</p>
            </div>
        </div>
    )
}

export default MoviesCard;