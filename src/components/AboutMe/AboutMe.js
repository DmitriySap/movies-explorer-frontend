import React from 'react';
import './AboutMe.css';
import AboutMePhoto from '../../images/about-photo.png';

function AboutMe() {
    return (
        <section className="about-me" id="student">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__info">
                <div className="about-me__description">
                    <p className="about-me__name">Дмитрий</p>
                    <p className="about-me__job">Фронтенд-разработчик, 20 лет</p>
                    <p className="about-me__text">Я родился и живу в Энгельсе, учусь на факультете КНиИТ СГУ. Я люблю слушать музыку, а в свободное время занимаюсь её написанием. Увлекаюсь спортом. После того, как прошёл курс по веб-разработке, начал активно заниматься фриланс-заказами.</p>
                    <a className="about-me__gh-link" target="_blank" href="https://github.com/DmitriySap" rel="noreferrer">Github</a>
                </div>
                <a className="about-me__photo-link" href="https://vk.com/sapramusic" target="_blank" rel="noreferrer">
                    <img className="about-me__photo" alt="Фотография студента" src={AboutMePhoto}></img>
                </a>
            </div>
        </section>
    )
}

export default AboutMe;