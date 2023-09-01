import React, { useEffect } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { REGEXP_NAME, REGEXP_EMAIL } from '../../utils/constants';
import { useFormAndValidation } from '../../hooks/useFormAndValidations';;

const Register = ({ isLogged, authError, onRegisterUser, onSetAuthError }) => {
    const navigate = useNavigate();
    const { values, handleChange, errors, isValid } = useFormAndValidation();

    const handlerSubmitRegister = (evt) => {
        evt.preventDefault();
        onRegisterUser(values.name, values.email, values.password);
    };

    useEffect(() => {
        if (isLogged) {
        navigate(-1);
        }
        onSetAuthError('');
    }, [isLogged]);

    return (
        <section className="signup">
            <Link className="signup__logo" to="/" title="На главную" />
            <h1 className="signup__title">Добро пожаловать!</h1>
            <form className="signup__form" onSubmit={handlerSubmitRegister}>
                <div className="signup__input-container">
                    <label className="signup__label" type="text" id="name">Имя</label>
                    <input className="signup__input" 
                        type="text" 
                        id="name" 
                        placeholder="Введите имя" 
                        required 
                        minLength="2" 
                        maxLength="30"
                        pattern={REGEXP_NAME}
                        value={values.name || ''}
                        onChange={handleChange}
                        name="name"
                    ></input>
                </div>
                <div className="signup__input-container">
                    <label className="signup__label" type="email" id="email">E-mail</label>
                    <input className="signup__input" 
                        type="email" 
                        id="name" 
                        placeholder="example@yandex.ru" 
                        required 
                        minLength="2" 
                        maxLength="30"
                        pattern={REGEXP_EMAIL}
                        value={values.email || ''}
                        onChange={handleChange}
                        name="email"
                    ></input>
                </div>
                <div className="signup__input-container">
                    <label className="signup__label" type="password" id="password">Пароль</label>
                    <input className={`signup__input ${authError ? 'signup__input_red' : null}`} 
                        type="password" 
                        id="password" 
                        placeholder="***" 
                        required 
                        minLength="8"
                        name="password"
                        onChange={handleChange}
                        value={values.password || ''}
                    ></input>
                    <span className="signup__submit-error">{authError}</span>
                </div>
                <button className={`signup__button ${!isValid ? 'signup__button_disabled' : null}`} disabled={!isValid}>Зарегистрироваться</button>
                <p className="signup__submit-text">Уже зарегистрированы? <Link className="signup__login-link" to="/signin">Войти</Link></p>
            </form>
        </section>
    )
}

export default Register;