import React, { useEffect } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidations';

const Login = ( { isLogged, onAuthUser, authError, onSetAuthError } ) => {
    const navigate = useNavigate();
    const { values, handleChange, errors, isValid } = useFormAndValidation();

    const handlerSubmitAuthUser = (evt) => {
        evt.preventDefault();
        onAuthUser(values.email, values.password);
    };

    useEffect(() => {
        if (isLogged) {
        navigate(-1);
        }
        onSetAuthError('');
    }, [isLogged]);

    return (
        <section className="signin">
            <Link className="signin__logo" to="/" title="На главную" />
            <h1 className="signin__title">Рады видеть!</h1>
            <form className="signin__form" onSubmit={handlerSubmitAuthUser}>
                <div className="signin__input-container">
                    <label className="signin__label" type="email" id="email">E-mail</label>
                    <input className="signin__input" 
                        type="email" 
                        id="email" 
                        placeholder="example@yandex.ru" 
                        required
                        name="email"
                        onChange={handleChange}
                        value={values.email || ''}
                    ></input>
                </div>
                <div className="signin__input-container">
                    <label className="signin__label" type="password" id="password">Пароль</label>
                    <input className={`signin__input ${authError ? 'signin__input_red' : null}`} 
                        type="password" 
                        id="password" 
                        placeholder="***" 
                        required 
                        minLength="8"
                        name="password"
                        onChange={handleChange}
                        value={values.password || ''}
                    ></input>
                    <span className="signin__submit-error">{authError}</span>
                </div>
                <button className={`signin__button ${!isValid ? 'signin__button_disabled' : null}`} disabled={!isValid}>Войти</button>
                <p className="signin__submit-text">Ещё не зарегистрированы? <Link className="signin__register-link" to="/signup">Регистрация</Link></p>
            </form>
        </section>
    )
}

export default Login;