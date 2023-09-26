import React, { useState } from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import cards from '../../utils/cards';

const Portfolio = ({ onCardClick }) => {
    return (
        <section className='portfolio' id='portfolio'>
            <h2 className='portfolio__title'>
                <span className='portfolio__title-span'>02 — Портфолио</span>
            </h2>
            <div className='portfolio__content'>
                {cards.map(card => {
                    return (
                        <Card title={card.name} link={card.link} card={card} onCardClick={onCardClick} key={card.id}/>
                    )
                })}
            </div>
            <div className='portfolio__link-container'>
                <Link className='portfolio__more-link' to='https://vk.com/' target='_blank'>ПОСМОТРЕТЬ ВСЕ РАБОТЫ</Link>
            </div>
            
        </section>
    )
}

export default Portfolio;