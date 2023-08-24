import React from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import MoviesHeader from '../../components/MoviesHeader/MoviesHeader';

function Movies() {

    return (
        <section className="movies">
            <MoviesHeader />
            <SearchForm />
            <MoviesCardList />
            <button className="movies__more-button">Ещё</button>
        </section>
    )
}

export default Movies;