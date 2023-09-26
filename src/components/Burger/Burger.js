import React, { useState } from 'react';
import './Burger.css';
import Popup from '../Popup/Popup';

const Burger = ({ active, setActive, opened, setOpened }) => {
    const [popupActive, setPopupActive] = useState(false);

    const handleClick = () => {
        setActive((state) => !state)
        setOpened((state) => !state)
        if (active) {
            document.body.style.overflow = 'auto';
        } if (!active) {
            document.body.style.overflow = 'hidden';
        }
    }

    const handleButtonClick = () => {
        setPopupActive((state) => !state)
    }

    return (
        <div className={active ? 'burger burger_active' : 'burger'}>
            <div className={active ? 'burger__content burger__content_active' : 'burger__content'}>
                <ul className='burger__list'>
                    <li className='burger__list-el'>
                        <a className='burger__list-el-link' href='#price' onClick={handleClick}>Услуги</a>
                    </li>
                    <li className='burger__list-el'>
                        <a className='burger__list-el-link' href='#portfolio' onClick={handleClick}>Портфолио</a>
                    </li>
                    <li className='burger__list-el'>
                        <a className='burger__list-el-link' href='#reviews' onClick={handleClick}>Отзывы</a>
                    </li>
                    <li className='burger__list-el'>
                        <a className='burger__list-el-link' href='#contacts' onClick={handleClick}>Контакты</a>
                    </li>
                </ul>
                <button className='burger__button' onClick={handleButtonClick}>Записаться</button>
            </div>
            <Popup popupActive={popupActive} setPopupActive={setPopupActive}/>
        </div>
    )
}

export default Burger;