import React, { useRef, useState, useMemo, useEffect } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movieData,
                      onLikeMovie,
                      userMovies,
                      onDislikeMovies, 
    }) => {
    const [isLiked, setIsLiked] = useState(false);

    const {
        trailerLink,
        image,
        nameRU,
        nameEN,
        duration,
        country,
        director,
        year,
        description,
        id,
    } = movieData;

    let location = useLocation();
    const hover = useRef('hover');
    const link = useRef('https://api.nomoreparties.co');

    const onHover = () => {
        hover.current.style.visibility = 'visible';
    };

    const onExit = () => {
        hover.current.style.visibility = 'hidden';
    };

    const handleCheckedLike = () => {
        if (location.pathname === '/movies' && userMovies && userMovies.length) {
        const likedMovie = userMovies.find((item) => {
            if (item.movieId === id) {
            setIsLiked(() => true);
            return item;
            }
        });
        return likedMovie;
        } else {
        return null;
        }
    };

    const handlerToggleMovie = () => {
        const movie = handleCheckedLike();
        const data = {
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: `${link.current}${image.url}`,
        trailerLink: trailerLink,
        thumbnail: `${link.current}${image.formats.thumbnail.url}`,
        movieId: id,
        nameRU: nameRU,
        nameEN: nameEN,
        };

        if (movie) {
        setIsLiked((prev) => !prev);
        onDislikeMovies(movie._id);
        } else {
        onLikeMovie(data);
        setIsLiked(() => true);
        }
    };

    const handleDeleteMovies = () => {
        onDislikeMovies(movieData._id);
    };

    const handleCalculateDuration = (data) => {
        const oneHour = 60;
        const time = {
        hour: `${
            Math.floor(data / oneHour) ? Math.floor(data / oneHour) + 'ч' : ''
        }`,
        minutes: `${data % oneHour ? (data % oneHour) + 'м' : ''}`,
        };
        return time;
    };

    const memoizedDuration = useMemo(
        () => handleCalculateDuration(duration),
        [duration]
    );

    useEffect(() => {
        handleCheckedLike();
    }, []);

    return (
        <div className="card-container"
            
        >
            {location.pathname === '/movies' ? (
                <button 
                    className={`card__container-button ${isLiked && 'card__container-button_active'}`} 
                    onClick={handlerToggleMovie}
                />
            )
            : (
            <button
              onClick={handleDeleteMovies}
              className="card__container-button card__container-button_type_remove"
            />
            )
            }
            <a className="card-container__trailer-link" href={trailerLink} target="_blank" rel="noreferrer">
                <img src={location.pathname === '/movies' ? `${link.current}${image.url}` : image} alt="Обложка фильма" className="card-container__image"></img>
            </a>
            <div className="card-container__footer">
                <p className="card-container__movie-title">{nameRU || nameEN}</p>
                <p className="card-container__movie-time">{memoizedDuration.hour} {memoizedDuration.minutes}</p>
            </div>
        </div>
    )
}

export default MoviesCard;