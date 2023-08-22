import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about" id="project">
            <h2 className="about__title">О проекте</h2>
            <ul className="about__info">
                <li className="about__info-item">
                    <h3 className="about__info-item-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about__info-item-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="about__info-item">
                    <h3 className="about__info-item-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__info-item-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <ul className="about__steps">
                <li className="about__step about__step_backend">
                    <h4 className="about__step-title about__step-title_backend">1 неделя</h4>
                    <p className="about__step-text">Back-end</p>
                </li>
                <li className="about__step about__step_frontend">
                    <h4 className="about__step-title about__step-title_frontend">4 недели</h4>
                    <p className="about__step-text">Front-end</p>
                </li>
            </ul>
        </section>
    );
};

export default AboutProject;