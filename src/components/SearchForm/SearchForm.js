import React from 'react';
import './SearchForm.css';
import searchButton from '../../images/search-button.svg';

function SearchForm() {
    return (
        <div className="search">
        <div className="search__input-container">
            <input className="search__input" placeholder="Фильм" required />
            <button className="search__button" type="submit">
                <div className="search__button-container">
                    <img className="search__button-container-img" src={searchButton} alt="Кнопка поиска"></img>
                </div>
            </button>
        </div>
        <div className="search__checkbox-container">
            <label className="search__checkbox">
                <input type="checkbox" />
                <span className="search__checkbox-switcher" />
            </label>
            <p className="search__checkbox-text">Короткометражки</p>
        </div>
    </div>
    )
}

export default SearchForm;