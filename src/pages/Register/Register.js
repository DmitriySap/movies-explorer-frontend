import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg'

function Register() {
    return (
        <section className="signup">
            <img className="signup__logo" src={logo} alt="Логотип"></img>
            <h1 className="signup__title">Добро пожаловать!</h1>
            <form className="signup__form">
                <div className="signup__input-container">
                    <label className="signup__label" type="text" id="name">Имя</label>
                    <input className="signup__input" type="text" id="name" placeholder="Дмитрий"></input>
                </div>
                <div className="signup__input-container">
                    <label className="signup__label" type="email" id="email">E-mail</label>
                    <input className="signup__input" type="email" id="name" placeholder="example@yandex.ru"></input>
                </div>
                <div className="signup__input-container">
                    <label className="signup__label" type="password" id="password">Пароль</label>
                    <input className="signup__input" type="password" id="password" placeholder="***"></input>
                </div>
                <button className="signup__button">Зарегистрироваться</button>
                <p className="signup__submit-text">Уже зарегистрированы? <Link className="signup__login-link" to="/sign-in">Войти</Link></p>
            </form>
        </section>
    )
}

export default Register;