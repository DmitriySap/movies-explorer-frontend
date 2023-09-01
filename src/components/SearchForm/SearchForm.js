import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';
import { searchReqStorage } from '../../utils/storage';
import searchButton from '../../images/search-button.svg';

const SearchForm = ({ isChecked,
                      onToggleCheckbox,
                      onSearchMovies,
                      onSearchUserMovies,
                      onfilterUserMovie,
                      onUserSearchReq,
                      userSearchReq, 
    }) => {
    const [isSearch, setSearch] = useState('');
    const [userCheckBox, setUserCheckBox] = useState(false);
    const location = useLocation();

    const handleToggleCheckbox = () => {
        onToggleCheckbox();
        onSearchMovies(isSearch);
    };

    const handleChangleInput = (evt) => {
        setSearch(evt.target.value);
    };

    const handleChangeUserMovieInput = (evt) => {
      onUserSearchReq(evt.target.value);
    };

    const handlerSumbit = (evt) => {
        evt.preventDefault();
        onSearchMovies(isSearch);
    };

    const handleSumbitUserSearch = (evt) => {
      evt.preventDefault();
      onSearchUserMovies(userSearchReq);
    };

    const handleToggleUserCheckbox = () => {
      setUserCheckBox((prev) => !prev);
      onfilterUserMovie(userCheckBox);
    };

      useEffect(() => {
        if (location.pathname === '/movies') {
          const prevSearch = searchReqStorage.getDataStorage();
          if (prevSearch) {
            setSearch(prevSearch);
          }
        }
      }, []);

    return (
        <form className="search" onSubmit={ location.pathname === '/movies' ? 
          (e) => handlerSumbit(e)
          : (e) => handleSumbitUserSearch(e)
        }>
        <div className="search__input-container">
            <input 
                className="search__input" 
                placeholder="Фильм" 
                name="search"
                value={location.pathname === '/movies' ? isSearch : userSearchReq}
                onChange={location.pathname === '/movies' ? (e) => handleChangleInput(e) : (e) => handleChangeUserMovieInput(e)}
             />
            <button className="search__button" type="submit">
                <div className="search__button-container">
                    <img className="search__button-container-img" src={searchButton} alt="Кнопка поиска"></img>
                </div>
            </button>
        </div>
        <div className="search__checkbox-container">
            <label className="search__checkbox">
                <input 
                    type="checkbox" 
                    checked={location.pathname === '/movies' ? isChecked : userCheckBox}
                    onChange={location.pathname === '/movies' ? () => handleToggleCheckbox() : () => handleToggleUserCheckbox()}
                />
                <span className="search__checkbox-switcher" />
            </label>
            <p className="search__checkbox-text">Короткометражки</p>
        </div>
    </form>
    )
}

export default SearchForm;