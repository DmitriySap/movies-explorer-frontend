import React, { useEffect } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = ( { isLogged, onAuthUser, authError, onSetAuthError } ) => {

    return (
        <section className="signin">
            <Link className="signin__logo" to="/" title="На главную" />
            <h1 className="signin__title">Рады видеть!</h1>
            <form className="signin__form">
                <div className="signin__input-container">
                    <label className="signin__label" type="email" id="email">E-mail</label>
                    <input className="signin__input" type="email" id="email" placeholder="example@yandex.ru" required></input>
                </div>
                <div className="signin__input-container">
                    <label className="signin__label" type="password" id="password">Пароль</label>
                    <input className="signin__input" type="password" id="password" placeholder="***" required minLength="8"></input>
                </div>
                <button className="signin__button">Войти</button>
                <p className="signin__submit-text">Ещё не зарегистрированы? <Link className="signin__register-link" to="/sign-up">Регистрация</Link></p>
            </form>
        </section>
    )
}

export default Login;