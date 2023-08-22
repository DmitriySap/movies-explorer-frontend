import React from 'react';
import {NavLink, useLocation } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = ({burgerActive}) => {
    return (
            <div className={burgerActive ? 'burger-menu burger-menu_active' : 'burger-menu'}>
                <ul className="burger-menu__nav-items">
                    <li className="burger-menu__nav-item">
                        <NavLink to="/" className={({isActive}) => isActive ? "burger-menu__link_active" : "burger-menu__link"}>Главная</NavLink>
                    </li>
                    <li className="burger-menu__nav-item">
                        <NavLink to="/movies" className={({isActive}) => isActive ? "burger-menu__link_active" : "burger-menu__link"}>Фильмы</NavLink>
                    </li>
                    <li className="burger-menu__nav-item">
                        <NavLink to="/saved-movies" className={({isActive}) => isActive ? "burger-menu__link_active" : "burger-menu__link"}>Сохранённые фильмы</NavLink>
                    </li>
                </ul>
                <NavLink to="/profile" className={({isActive}) => isActive ? "burger-menu__profile-button_active" : "burger-menu__profile-button"}>Аккаунт</NavLink>
            </div>
    )
}

export default BurgerMenu;