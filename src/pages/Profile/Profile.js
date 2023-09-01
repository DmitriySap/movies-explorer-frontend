import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidations';
import {
    MESSAGE_EDIT_COMPLETE,
    REGEXP_EMAIL,
    REGEXP_NAME
} from '../../utils/constants';
const ERROR = 'Нельзя оставить данные без изменения.';

const Profile = ({ authError, onLogOutUser, onSetUserInfo, onSetErrorInfo, }) => {
    const userInfo = useContext(CurrentUserContext);
    const { values, handleChange, errors, isValid, setValues } =
        useFormAndValidation();

    const handlerLogOutUser = () => {
        onLogOutUser();
    };

    const handleCheckedPrevValue = () => {
        if (values.name !== userInfo.name || values.email !== userInfo.email) {
        onSetUserInfo({
            name: values.name,
            email: values.email,
        });
        onSetErrorInfo('');
        return;
        } else {
        onSetErrorInfo(ERROR);
        }
    };

    const handleSumbitSetUserInfo = (evt) => {
        evt.preventDefault();
        handleCheckedPrevValue();
    };

    useEffect(() => {
        setValues({ name: userInfo.name, email: userInfo.email });
        onSetErrorInfo('');
    }, []);

    return (
        <section className="profile">
            <div className="profile__body">
                <h1 className="profile__title">Привет, {userInfo.name}!</h1>
                <form className="profile__content" onSubmit={handleSumbitSetUserInfo}>
                    <label className="profile__label">
                        <p className="profile__label-text profile__label-text_medium">Имя</p>
                        <input className="profile__label-text"
                            type="text"
                            name="name"
                            pattern={REGEXP_NAME}
                            required
                            value={values.name || ''}
                            onChange={handleChange}
                        ></input>
                    </label>
                    <label className="profile__label">
                        <p className="profile__label-text profile__label-text_medium">E-mail</p>
                        <input className="profile__label-text"
                            type="email"
                            name="email"
                            pattern={REGEXP_EMAIL}
                            required
                            value={values.email || ''}
                            onChange={handleChange}
                        ></input>
                    </label>
                    <span className={`profile__edit-message ${authError === MESSAGE_EDIT_COMPLETE ?
                        'profile__edit-message_complete'
                        : null
                    }`}>{authError}</span>
                    <button className={`profile__button ${!isValid ? 'profile__button_disabled' : null}`} disabled={!isValid}>Редактировать</button>
                </form>
                <Link className="profile__logout-button" to='/' title="На главную" onClick={handlerLogOutUser}>Выйти из аккаунта</Link>
            </div>
        </section>
    )
}

export default Profile;