import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <Link className="header__logo" to="/" title="На главную" />
            <nav className="header__auth">
                <ul className="header__auth-buttons">
                    <li>
                        <Link className="header__auth-button" to="/signup">
                            Регистрация
                        </Link>
                    </li> 
                    <li>
                        <Link className="header__auth-button header__auth-button_green-theme" to="/signin">
                            Войти
                        </Link>
                    </li>   
                </ul> 
            </nav>
        </header>
    )
}

export default Header;