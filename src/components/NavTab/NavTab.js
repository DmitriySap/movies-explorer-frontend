import React from 'react';
import './NavTab.css';

export const NavTab = () => (
    <div className="nav">
        <nav className="nav__items">
            <a href="#project" className="nav__item">О проекте</a>
            <a href="#techs" className="nav__item">Технологии</a>
            <a href="#student" className="nav__item">Студент</a>
        </nav>
    </div>
);

export default NavTab;