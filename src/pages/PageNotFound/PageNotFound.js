import React from 'react';
import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className="error-page">
            <h1 className="error-page__title">404</h1>
            <h2 className="error-page__subtitle">Страница не найдена</h2>
            <button className="error-page__button" onClick={() => navigate(-1)}>Назад</button>
        </div>
    )
}

export default PageNotFound;