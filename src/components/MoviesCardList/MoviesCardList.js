import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = ({ movies,
                          isLoading,
                          onLikeMovie,
                          userMovies,
                          errorStatus,
                          onGetSavedMovies,
                          onDislikeMovies, 
    }) => {
    let location = useLocation();

    useEffect(() => {
      onGetSavedMovies();
    }, []);
      
    return (
      <>
          {(location.pathname === '/movies' && movies && movies.length !== 0) || (location.pathname === '/saved-movies' && userMovies && userMovies.length !== 0) ? (
            <div className="card-list">
              {isLoading ? (
                <Preloader />
              ) : location.pathname === '/movies' ? (
                 movies.map((item) => {
                  return (
                    <MoviesCard
                      key={item.id}
                      movieData={{ ...item }}
                      onLikeMovie={onLikeMovie}
                      userMovies={userMovies}
                      onDislikeMovies={onDislikeMovies}
                    />
                  );
                }) 
              ) : location.pathname === '/saved-movies' ? (
                 userMovies.map((savedMovie) => {
                  return (
                    <MoviesCard
                      key={savedMovie._id}
                      movieData={{ ...savedMovie }}
                      onLikeMovie={onLikeMovie}
                      userMovies={userMovies}
                      onDislikeMovies={onDislikeMovies}
                    />
                  );
                }) 
              ) : (<Preloader />)}
            </div>
          ) : (<Preloader />)}
      </>
    )
}

export default MoviesCardList;