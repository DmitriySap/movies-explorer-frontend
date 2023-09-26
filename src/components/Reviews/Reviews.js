import React from 'react';
import './Reviews.css';
import { Link } from 'react-router-dom';
import avatar from '../../images/reviews.png';
import stars from '../../images/star.png';

const Reviews = () => {
    return (
        <section className='reviews' id='reviews'>
            <h2 className='reviews__title'>
                <span className='reviews__title-span'>03 — Отзывы</span>
            </h2>
            <ul className='reviews__list'>
                <li className='reviews__list-el'>
                    <div className='reviews__list-el-header'>
                        <div className='reviews__list-el-header-content'>
                            <img className='reviews__list-el-header-image' src={avatar} alt='Аватар'></img>
                            <p className='reviews__list-el-header-name'>Иван</p>
                        </div>
                        <img className='reviews__list-el-header-grade' src={stars} alt='Оценка'></img>
                    </div>
                    <p className='reviews__list-text'>Хороший салон, вежливо интересуются как меня нужно было постричь. Парикмахера зовут Надежда. Никакой предварительной записи, пришел и сразу обслужили. Парикмахерскую рекомендую, в следующий раз тоже туда обращусь.</p>
                </li>
                <li className='reviews__list-el'>
                    <div className='reviews__list-el-header'>
                        <div className='reviews__list-el-header-content'>
                            <img className='reviews__list-el-header-image' src={avatar} alt='Аватар'></img>
                            <p className='reviews__list-el-header-name'>Милена</p>
                        </div>
                        <img className='reviews__list-el-header-grade' src={stars} alt='Оценка'></img>
                    </div>
                    <p className='reviews__list-text'>Очень люблю этот салон, хорошие мастера и администраторы, спасибо им за их труд!</p>
                </li>
                <li className='reviews__list-el'>
                    <div className='reviews__list-el-header'>
                        <div className='reviews__list-el-header-content'>
                            <img className='reviews__list-el-header-image' src={avatar} alt='Аватар'></img>
                            <p className='reviews__list-el-header-name'>Светлана</p>
                        </div>
                        <img className='reviews__list-el-header-grade' src={stars} alt='Оценка'></img>
                    </div>
                    <p className='reviews__list-text'>Неплохой салон, администратор вежливая, можно без записи, стоит отметить также профессионализм мастера Надежды, мастер с большим опытом работы!</p>
                </li>
                <li className='reviews__list-el'>
                    <div className='reviews__list-el-header'>
                        <div className='reviews__list-el-header-content'>
                            <img className='reviews__list-el-header-image' src={avatar} alt='Аватар'></img>
                            <p className='reviews__list-el-header-name'>Марина</p>
                        </div>
                        <img className='reviews__list-el-header-grade' src={stars} alt='Оценка'></img>
                    </div>
                    <p className='reviews__list-text'>Обслуживаюсь здесь всегда . Все устраивает!!!</p>
                </li>
                <li className='reviews__list-el'>
                    <div className='reviews__list-el-header'>
                        <div className='reviews__list-el-header-content'>
                            <img className='reviews__list-el-header-image' src={avatar} alt='Аватар'></img>
                            <p className='reviews__list-el-header-name'>Максим</p>
                        </div>
                        <img className='reviews__list-el-header-grade' src={stars} alt='Оценка'></img>
                    </div>
                    <p className='reviews__list-text'>Отлично стригут, недорого!</p>
                </li>
                <li className='reviews__list-el'>
                    <div className='reviews__list-el-header'>
                        <div className='reviews__list-el-header-content'>
                            <img className='reviews__list-el-header-image' src={avatar} alt='Аватар'></img>
                            <p className='reviews__list-el-header-name'>Валентина</p>
                        </div>
                        <img className='reviews__list-el-header-grade' src={stars} alt='Оценка'></img>
                    </div>
                    <p className='reviews__list-text'>Очень нравится студия, комфортно, уютно, все девочки хорошие, приятные, знают толк в своём деле!</p>
                </li>
            </ul>
            <div className='reviews__link-container'>
                <Link className='reviews__more-link' to='https://2gis.ru/engels/firm/6052240280434163/tab/reviews?m=46.127581%2C51.501286%2F16' target='_blank'>ПОСМОТРЕТЬ ВСЕ ОТЗЫВЫ</Link>
            </div>
        </section>
    )
}

export default Reviews;