import React from 'react';
import './Profile.css';

function Login() {
    return (
        <section className="profile">
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
            <button className="profile__logout-button">Выйти из аккаунта</button>
        </section>
    )
}

export default Login;