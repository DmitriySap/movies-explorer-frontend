import React, { useState } from 'react';
import {NavLink, useLocation } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = ({burgerActive}) => {
    const [isActive, setActive] = useState(false);
    //bugfix burger scroll
    const handleClick = () => {
        if (!isActive) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    };

    return (
            <div className={burgerActive ? 'burger-menu burger-menu_active' : 'burger-menu'}>
                <ul className="burger-menu__nav-items">
                    <li className="burger-menu__nav-item">
                        <NavLink to="/" className={({isActive}) => isActive ? "burger-menu__link_active" : "burger-menu__link"} onClick={handleClick}>Главная</NavLink>
                    </li>
                    <li className="burger-menu__nav-item">
                        <NavLink to="/movies" className={({isActive}) => isActive ? "burger-menu__link_active" : "burger-menu__link"} onClick={handleClick}>Фильмы</NavLink>
                    </li>
                    <li className="burger-menu__nav-item">
                        <NavLink to="/saved-movies" className={({isActive}) => isActive ? "burger-menu__link_active" : "burger-menu__link"} onClick={handleClick}>Сохранённые фильмы</NavLink>
                    </li>
                </ul>
                <NavLink to="/profile" className={({isActive}) => isActive ? "burger-menu__profile-button_active" : "burger-menu__profile-button"} onClick={handleClick}>Аккаунт</NavLink>
            </div>
    )
}

export default BurgerMenu;