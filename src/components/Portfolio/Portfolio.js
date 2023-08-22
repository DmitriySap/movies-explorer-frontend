import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__items">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/DmitriySap/how-to-learn" target="blank" rel="noreferrer">Статичный сайт</a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://dmitriysap.github.io/russian-travel/" target="blank" rel="noreferrer">Адаптивный сайт</a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/DmitriySap/react-mesto-api-full-gha" target="blank" rel="noreferrer">Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;