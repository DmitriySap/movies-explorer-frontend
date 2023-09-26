import React, { useState, useEffect } from 'react';
import './Header.css';
import Burger from '../Burger/Burger';
import smoothScroll from '../../utils/smoothScroll';

const Header = () => {
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

    useEffect(() => {
        smoothScroll()
      }, [])

    return (
        <header className='header' id='#header'>
            <a href='https://vk.com' target='_blank' className='header__logo' rel='noreferrer'>INDIGO</a>
            <ul className='header__list'>
                <li className='header__list-el'>
                    <a className='header__list-el-link' href='#price'>Услуги</a>
                </li>
                <li className='header__list-el'>
                    <a className='header__list-el-link' href='#portfolio'>Портфолио</a>
                </li>
                <li className='header__list-el'>
                    <a className='header__list-el-link' href='#reviews'>Отзывы</a>
                </li>
                <li className='header__list-el'>
                    <a className='header__list-el-link' href='#contacts'>Контакты</a>
                </li>
            </ul>
            <Burger active={burgerActive} setActive={setBurgerActive} opened={isOpened} setOpened={setOpened}/>
            <div className="burger-button" onClick={handleClick} >
                        <span
                            className={`burger-button__line burger-button__line_first ${isOpened ? 'burger-button__line_first_opened' : ''}`}
                        />
                        <span
                            className={`burger-button__line burger-button__line_second ${isOpened ? 'burger-button__line_second_opened' : ''}`}
                        />
                        <span
                            className={`burger-button__line burger-button__line_third ${isOpened ? 'burger-button__line_third_opened' : ''}`}
                        />
            </div>
        </header>
    )
}

export default Header;