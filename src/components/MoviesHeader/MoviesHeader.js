import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './MoviesHeader.css';

function MoviesHeader() {
    const location = useLocation().pathname;

    const [isOpened, setOpened] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);

    const handleClick = () => {
        setOpened((state) => !state);
        setBurgerActive((state) => !state);
        if (isOpened) {
            document.body.style.overflow = 'auto';
        } if (!isOpened) {
            document.body.style.overflow = 'hidden';
        }
    };

    return (
        <div className="movies-header">
            <BurgerMenu burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
            <Link className="movies-header__logo" to="/" title="На главную" />
            <ul className="movies-header__nav-items">
                <li className="movies-header__nav-item">
                    <NavLink to="/movies" className={({isActive}) => isActive ? "movies-header__link_active" : "movies-header__link"}>Фильмы</NavLink>
                </li>
                <li className="movies-header__nav-item">
                    <NavLink to="/saved-movies" className={({isActive}) => isActive ? "movies-header__link_active" : "movies-header__link"}>Сохранённые фильмы</NavLink>
                </li>
            </ul>
            <NavLink to="/profile" className={({isActive}) => isActive ? "movies-header__profile-button_active" : "movies-header__profile-button"}>Аккаунт</NavLink>
            <div className="burger" onClick={handleClick} >
                        <span
                            className={`burger__line burger__line_first ${isOpened ? 'burger__line_first_opened' : ''}`}
                        />
                        <span
                            className={`burger__line burger__line_second ${isOpened ? 'burger__line_second_opened' : ''}`}
                        />
                        <span
                            className={`burger__line burger__line_third ${isOpened ? 'burger__line_third_opened' : ''}`}
                        />
                    </div>
        </div>
    )
}

export default MoviesHeader;