import React, { useState } from 'react';
import './Nails.css';
import PriceHeader from '../../components/PriceHeader/PriceHeader';
import Popup from '../../components/Popup/Popup';

const Nails = () => {
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
        <main className='nails'>
            <PriceHeader />
            <h1 className='nails__title'>Ногтевой сервис</h1>
            <div className='nails__content'>
                <ul className='nails__list'>
                    <h2 className='nails__list-title'>Маникюр</h2>
                    <li className='nails__list-el'>
                        <h3 className='nails__list-el-title'>Маникюр</h3>
                        <p className='nails__list-el-price'>400 рублей</p>
                    </li>
                    <li className='nails__list-el'>
                        <h3 className='nails__list-el-title'>Маникюр + гель-лак</h3>
                        <p className='nails__list-el-price'>1000 рублей</p>
                    </li>
                    <li className='nails__list-el'>
                        <h3 className='nails__list-el-title'>Снятие гель-лака</h3>
                        <p className='nails__list-el-price'>200 рублей</p>
                    </li>
                    <li className='nails__list-el'>
                        <h3 className='nails__list-el-title'>Наращивание ногтей</h3>
                        <p className='nails__list-el-price'>1800 рублей</p>
                    </li>
                    <li className='nails__list-el'>
                        <h3 className='nails__list-el-title'>Дизайн ногтей</h3>
                        <p className='nails__list-el-price'>от 50 рублей</p>
                    </li>
                    <li className='nails__list-el'>
                        <h3 className='nails__list-el-title'>Ремонт 1 ногтя</h3>
                        <p className='nails__list-el-price'>50 рублей</p>
                    </li>
                    <li className='nails__list-el'>
                        <h3 className='nails__list-el-title'>Покрытие обычный лак</h3>
                        <p className='nails__list-el-price'>100 рублей</p>
                    </li>
                    <li className='nails__list-el'>
                        <h3 className='nails__list-el-title'>Маникюр мужской</h3>
                        <p className='nails__list-el-price'>600 рублей</p>
                    </li>
                </ul>
                <ul className='nails__list'>
                    <h2 className='nails__list-title'>Педикюр</h2>
                    <li className='nails__list-el'>
                        <h3 className='nails__list-el-title'>SMART-Педикюр</h3>
                        <p className='nails__list-el-price'>1000 рублей</p>
                    </li>
                    <li className='nails__list-el'>
                        <h3 className='nails__list-el-title'>Покрытие гель-лак</h3>
                        <p className='nails__list-el-price'>500 рублей</p>
                    </li>
                    <li className='nails__list-el'>
                        <h3 className='nails__list-el-title'>Снятие гель-лака</h3>
                        <p className='nails__list-el-price'>200 рублей</p>
                    </li>
                    <li className='nails__list-el'>
                        <h3 className='nails__list-el-title'>Частичная обработка (только пальчики/стопы)</h3>
                        <p className='nails__list-el-price'>600 рублей</p>
                    </li>
                    <li className='nails__list-el'>
                        <h3 className='nails__list-el-title'>Покрытие обычный лак</h3>
                        <p className='nails__list-el-price'>100 рублей</p>
                    </li>
                    <li className='nails__list-el'>
                        <h3 className='nails__list-el-title'>Мужской SMART-Педикюр</h3>
                        <p className='nails__list-el-price'>1300 рублей</p>
                    </li>
                </ul>
            </div>
            <div className='nails__button-container'>
                <button className='nails__button' onClick={handleClick}>Записаться</button>
            </div>
            <Popup popupActive={popupActive} setPopupActive={setPopupActive}/>
        </main>
    )
}
export default Nails;