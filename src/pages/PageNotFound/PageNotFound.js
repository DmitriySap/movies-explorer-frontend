import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className='page'>
            <div className='page__content'>
                <h1 className='page__title'>404</h1>
                <p className='page__subtitle'>Страница не найдена</p>
            </div>
            <Link className='page__link' to='/'>Вернуться на главную</Link>
        </div>
    )
}
export default PageNotFound;