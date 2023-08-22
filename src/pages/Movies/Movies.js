import React from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';

function Movies() {

    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList />
            <button className="movies__more-button">Ещё</button>
        </section>
    )
}

export default Movies;