import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import MoviesHeader from '../../components/MoviesHeader/MoviesHeader';

function Login() {
    return (
        <section className="profile">
            <MoviesHeader />
            <div className="profile__body">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <div className="profile__content">
                    <div className="profile__label">
                        <p className="profile__label-text profile__label-text_medium">Имя</p>
                        <p className="profile__label-text">Виталий</p>
                    </div>
                    <div className="profile__label">
                        <p className="profile__label-text profile__label-text_medium">E-mail</p>
                        <p className="profile__label-text">example@yandex.ru</p>
                    </div>
                </div>
                <button className="profile__button">Редактировать</button>
                <Link className="profile__logout-button" to="/" title="На главную">Выйти из аккаунта</Link>
            </div>
        </section>
    )
}

export default Login;