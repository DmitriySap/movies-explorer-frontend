import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';
import { searchReqStorage } from '../../utils/storage';
import searchButton from '../../images/search-button.svg';

const SearchForm = ({ isChecked, onToggleCheckbox, onSearchMovies, onSearchUserMovies,
    onfilterUserMovie,
    onUserSearchReq,
    userSearchReq, }) => {
    const [isSearch, setSearch] = useState('');
    const [userCheckBox, setUserCheckBox] = useState(false);
    const location = useLocation();

    const handleToggleCheckbox = () => {
        onToggleCheckbox();
    };

    const handleChangleInput = (evt) => {
        setSearch(evt.target.value);
    };

    const handlerSumbit = (evt) => {
        evt.preventDefault();
        onSearchMovies(isSearch);
    };

    const handleChangeUserMovieInput = (evt) => {
        onUserSearchReq(evt.target.value);
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
        <form className="search" onSubmit={(e) => handlerSumbit(e)}>
        <div className="search__input-container">
            <input 
                className="search__input" 
                placeholder="Фильм" 
                required
                value={isSearch || ''}
                onChange={handleChangleInput}
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
                    checked={isChecked}
                    onChange={handleToggleCheckbox}
                />
                <span className="search__checkbox-switcher" />
            </label>
            <p className="search__checkbox-text">Короткометражки</p>
        </div>
    </form>
    )
}

export default SearchForm;