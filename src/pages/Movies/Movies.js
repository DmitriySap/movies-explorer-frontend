import React, { useEffect } from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import MoviesHeader from '../../components/MoviesHeader/MoviesHeader';

const Movies = ({ movies, isChecked, onToggleCheckbox, onSearchMovies, onGetApiMovies }) => {
    const handleGetApiMovies = () => {
        onGetApiMovies()
    }

    useEffect(() => {
        onGetApiMovies();
    })

    return (
        <section className="movies">
            <MoviesHeader />
            <SearchForm 
                isChecked={isChecked}
                onToggleCheckbox={onToggleCheckbox}
                onSearchMovies={onSearchMovies}
            />
            <MoviesCardList movies={movies} />
            <button className="movies__more-button">Ещё</button>
        </section>
    )
}

export default Movies;