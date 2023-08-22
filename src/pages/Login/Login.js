import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg'

function Login() {
    return (
        <section className="signin">
            <img className="signin__logo" src={logo} alt="Логотип"></img>
            <h1 className="signin__title">Рады видеть!</h1>
            <form className="signin__form">
                <div className="signin__input-container">
                    <label className="signin__label" type="email" id="email">E-mail</label>
                    <input className="signin__input" type="email" id="email" placeholder="example@yandex.ru"></input>
                </div>
                <div className="signin__input-container">
                    <label className="signin__label" type="password" id="password">Пароль</label>
                    <input className="signin__input" type="password" id="password" placeholder="***"></input>
                </div>
                <button className="signin__button">Войти</button>
                <p className="signin__submit-text">Ещё не зарегистрированы? <Link className="signin__register-link" to="/sign-up">Регистрация</Link></p>
            </form>
        </section>
    )
}

export default Login;