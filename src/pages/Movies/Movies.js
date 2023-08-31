import React, { useEffect } from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import MoviesHeader from '../../components/MoviesHeader/MoviesHeader';

const Movies = ({ movies, userMovies, onDislikeMovies, onLikeMovie, errorStatus, onGetSavedMovies, isChecked, onToggleCheckbox, onSearchMovies, onGetApiMovies, isLoading, searchRequire, moviesInStorage, onPaginateMovies, onGetStorageData, onCheckboxToggle }) => {
     useEffect(() => {
        onGetApiMovies();
        onGetStorageData();
    }, [])

    const handlerPagitateMovies = () => {
        onPaginateMovies();
      };

    useEffect(() => {
        onCheckboxToggle()
    }, [isChecked])

    return (
        <section className="movies">
            <MoviesHeader />
            <SearchForm 
                isChecked={isChecked}
                onToggleCheckbox={onToggleCheckbox}
                onSearchMovies={onSearchMovies}
            />
            {searchRequire ? (
                <MoviesCardList 
                    movies={movies}
                    isLoading={isLoading}
                    errorStatus={errorStatus}
                    onLikeMovie={onLikeMovie}
                    onGetSavedMovies={onGetSavedMovies}
                    userMovies={userMovies}
                    onDislikeMovies={onDislikeMovies}
                />
            ) : null}
            {moviesInStorage.length !== movies.length && moviesInStorage.length > 4 && (
                <button className="movies__more-button" onClick={handlerPagitateMovies}>Ещё</button>
            )}
        </section>
    )
}

export default Movies;