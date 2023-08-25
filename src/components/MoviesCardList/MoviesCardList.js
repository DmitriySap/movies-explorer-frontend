import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {
    let location = useLocation();

    return (
        <div className="card-list">
            {movies.map((item) => {
          return (
            <MoviesCard
              key={item.id}
              imageUrl={item.image.url}
              titleRU={item.nameRU}
              titleEN={item.nameEN}
              duration={item.duration}
              trailerLink={item.trailerLink}
            />
          );
        })}
        </div>
    )
}

export default MoviesCardList;