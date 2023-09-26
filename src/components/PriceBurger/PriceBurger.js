import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './PriceBurger.css';
import Popup from '../Popup/Popup';

const PriceBurger = ({ active, setActive, opened, setOpened }) => {
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
        <div className={active ? 'price-burger price-burger_active' : 'price-burger'}>
            <div className={active ? 'price-burger__content price-burger__content_active' : 'price-burger__content'}>
                <ul className='price-burger__list'>
                    <li className='price-burger__list-el'>
                        <NavLink className={({isActive}) => isActive ? 'price-burger__list-el-link price-burger__list-el-link_active' : 'price-burger__list-el-link'} to='/nail-services' onClick={handleClick}>Ногтевой сервис</NavLink>
                    </li>
                    <li className='price-burger__list-el'>
                        <NavLink className={({isActive}) => isActive ? 'price-burger__list-el-link price-burger__list-el-link_active' : 'price-burger__list-el-link'} to='/hairdressing-services' onClick={handleClick}>Парикмахерские услуги</NavLink>
                    </li>
                    <li className='price-burger__list-el'>
                        <NavLink className={({isActive}) => isActive ? 'price-burger__list-el-link price-burger__list-el-link_active' : 'price-burger__list-el-link'} to='/other' onClick={handleClick}>Другое</NavLink>
                    </li>
                    <li className='price-burger__list-el'>
                        <NavLink className={({isActive}) => isActive ? 'price-burger__list-el-link price-burger__list-el-link_active' : 'price-burger__list-el-link'} to='/' onClick={handleClick}>Главная</NavLink>
                    </li>
                </ul>
                <button className='price-burger__button' onClick={handleButtonClick}>Записаться</button>
            </div>
            <Popup popupActive={popupActive} setPopupActive={setPopupActive}/>
        </div>
    )
}

export default PriceBurger;