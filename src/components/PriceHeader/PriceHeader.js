import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './PriceHeader.css';
import PriceBurger from '../PriceBurger/PriceBurger';

const PriceHeader = () => {
    const [isOpened, setOpened] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);

    const handleClick = () => {
        setOpened((state) => !state);
        setBurgerActive((state) => !state);
        if (isOpened) {
            document.body.style.overflow = 'auto';
        } if (!isOpened) {
            document.body.style.overflow = 'hidden';
        }
    };

    return (
        <header className='price-header'>
            <Link to='/' className='price-header__logo'>INDIGO</Link>
            <ul className='price-header__list'>
                <li className='price-header__list-el'>
                    <NavLink className={({isActive}) => isActive ? 'price-header__link price-header__link_active' : 'price-header__link'} to='/nail-services'>Ногтевой сервис</NavLink>
                </li>
                <li className='price-header__list-el'>
                    <NavLink className={({isActive}) => isActive ? 'price-header__link price-header__link_active' : 'price-header__link'} to='/hairdressing-services'>Парикмахерские услуги</NavLink>
                </li>
                <li className='price-header__list-el'>
                    <NavLink className={({isActive}) => isActive ? 'price-header__link price-header__link_active' : 'price-header__link'} to='/other'>Другое</NavLink>
                </li>
                <li className='price-header__list-el'>
                    <NavLink className={({isActive}) => isActive ? 'price-header__link price-header__link_active' : 'price-header__link'} to='/'>Главная</NavLink>
                </li>
            </ul>
            <PriceBurger active={burgerActive} setActive={setBurgerActive} opened={isOpened} setOpened={setOpened}/>
            <div className="price-burger-button" onClick={handleClick} >
                        <span
                            className={`price-burger-button__line price-burger-button__line_first ${isOpened ? 'price-burger-button__line_first_opened' : ''}`}
                        />
                        <span
                            className={`price-burger-button__line price-burger-button__line_second ${isOpened ? 'price-burger-button__line_second_opened' : ''}`}
                        />
                        <span
                            className={`price-burger-button__line price-burger-button__line_third ${isOpened ? 'price-burger-button__line_third_opened' : ''}`}
                        />
            </div>
        </header>
    )
}
export default PriceHeader;