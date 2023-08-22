import React from 'react';
import './SavedMovies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import MoviesHeader from '../../components/MoviesHeader/MoviesHeader';

function SavedMovies() {
    return (
        <section className="saved-movies">
            <MoviesHeader />
            <SearchForm />
            <MoviesCardList />
        </section>
    )
}

export default SavedMovies;