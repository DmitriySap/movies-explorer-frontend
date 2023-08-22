import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className="error-page">
            <h1 className="error-page__title">404</h1>
            <h2 className="error-page__subtitle">Страница не найдена</h2>
            <Link to="/" className="error-page__button">Назад</Link>
        </div>
    )
}

export default PageNotFound;