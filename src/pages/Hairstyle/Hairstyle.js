import React, { useState, useEffect } from 'react';
import './Hairstyle.css';
import PriceHeader from '../../components/PriceHeader/PriceHeader';
import Popup from '../../components/Popup/Popup';

const Hairstyle = () => {
    const [popupActive, setPopupActive] = useState(false);

    const handleClick = () => {
        setPopupActive((state) => !state)
        if (popupActive) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }
    return (
        <main className='hairstyle'>
            <PriceHeader />
            <h1 className='hairstyle__title'>Парикмахерские услуги</h1>
            <div className='hairstyle__content'>
                <ul className='hairstyle__list'>
                    <h2 className='hairstyle__list-title'>Стрижки</h2>
                    <li className='hairstyle__list-el'>
                        <h3 className='hairstyle__list-el-title'>Женская стрижка</h3>
                        <p className='hairstyle__list-el-price'>от 400 рублей</p>
                    </li>
                    <li className='hairstyle__list-el'>
                        <h3 className='hairstyle__list-el-title'>Мужская стрижка</h3>
                        <p className='hairstyle__list-el-price'>от 300 рублей</p>
                    </li>
                    <li className='hairstyle__list-el'>
                        <h3 className='hairstyle__list-el-title'>Детская стрижка</h3>
                        <p className='hairstyle__list-el-price'>от 300 рублей</p>
                    </li><li className='hairstyle__list-el'>
                        <h3 className='hairstyle__list-el-title'>Салонный уход за волосами</h3>
                        <p className='hairstyle__list-el-price'>от 500 рублей</p>
                    </li>
                </ul>
                <ul className='hairstyle__list'>
                    <h2 className='hairstyle__list-title'>Окрашивание</h2>
                    <li className='hairstyle__list-el'>
                        <h3 className='hairstyle__list-el-title'>Окрашивание в один тон</h3>
                        <p className='hairstyle__list-el-price'>от 1400 рублей</p>
                    </li>
                    <li className='hairstyle__list-el'>
                        <h3 className='hairstyle__list-el-title'>Мелирование</h3>
                        <p className='hairstyle__list-el-price'>от 1800 рублей</p>
                    </li>
                    <li className='hairstyle__list-el'>
                        <h3 className='hairstyle__list-el-title'>Тонирование</h3>
                        <p className='hairstyle__list-el-price'>от 1500 рублей</p>
                    </li>
                    <li className='hairstyle__list-el'>
                        <h3 className='hairstyle__list-el-title'>Сложное окрашивание</h3>
                        <p className='hairstyle__list-el-price'>от 3000 рублей</p>
                    </li>
                </ul>
                <ul className='hairstyle__list'>
                    <h2 className='hairstyle__list-title'>Укладки</h2>
                    <li className='hairstyle__list-el'>
                        <h3 className='hairstyle__list-el-title'>Укладка женская</h3>
                        <p className='hairstyle__list-el-price'>от 500 рублей</p>
                    </li>
                    <li className='hairstyle__list-el'>
                        <h3 className='hairstyle__list-el-title'>Прически</h3>
                        <p className='hairstyle__list-el-price'>от 1000 рублей</p>
                    </li>
                </ul>
                <ul className='hairstyle__list'>
                    <h2 className='hairstyle__list-title'>Карвинг / химическая завивка</h2>
                    <li className='hairstyle__list-el'>
                        <h3 className='hairstyle__list-el-title'>Карвинг / химическая завивка</h3>
                        <p className='hairstyle__list-el-price'>от 1500 рублей</p>
                    </li>
                </ul>
            </div>
            <div className='hairstyle__button-container'>
                <button className='hairstyle__button' onClick={handleClick}>Записаться</button>
            </div>
            <Popup popupActive={popupActive} setPopupActive={setPopupActive}/>
        </main>
    )
}
export default Hairstyle;