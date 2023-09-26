import React, { useState } from 'react';
import './Other.css';
import PriceHeader from '../../components/PriceHeader/PriceHeader';
import Popup from '../../components/Popup/Popup';

const Other = () => {
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
        <main className='other'>
            <PriceHeader />
            <h1 className='other__title'>Другие услуги</h1>
            <div className='other__content'>
                <ul className='other__list'>
                    <h2 className='other__list-title'>Наращивание ресниц</h2>
                    <li className='other__list-el'>
                        <h3 className='other__list-el-title'>Классическое наращивание</h3>
                        <p className='other__list-el-price'>1300 рублей</p>
                    </li>
                    <li className='other__list-el'>
                        <h3 className='other__list-el-title'>2D наращивание</h3>
                        <p className='other__list-el-price'>1500 рублей</p>
                    </li>
                    <li className='other__list-el'>
                        <h3 className='other__list-el-title'>3D наращивание</h3>
                        <p className='other__list-el-price'>1600 рублей</p>
                    </li>
                </ul>
                <ul className='other__list'>
                    <h2 className='other__list-title'>Снятие другого мастера</h2>
                    <li className='other__list-el'>
                        <h3 className='other__list-el-title'>Снятие другого мастера</h3>
                        <p className='other__list-el-price'>200 рублей</p>
                    </li>
                </ul>
                <ul className='other__list'>
                    <h2 className='other__list-title'>Ламинирование ресниц</h2>
                    <li className='other__list-el'>
                        <h3 className='other__list-el-title'>Ламинирование ресниц</h3>
                        <p className='other__list-el-price'>1000 рублей</p>
                    </li>
                </ul>
                <ul className='other__list'>
                    <h2 className='other__list-title'>Брови</h2>
                    <li className='other__list-el'>
                        <h3 className='other__list-el-title'>Окрашивание (краска)</h3>
                        <p className='other__list-el-price'>200 рублей</p>
                    </li>
                    <li className='other__list-el'>
                        <h3 className='other__list-el-title'>Оформление (воск, пинцет, тридинг)</h3>
                        <p className='other__list-el-price'>200 - 300 рублей</p>
                    </li>
                    <li className='other__list-el'>
                        <h3 className='other__list-el-title'>Перманентный макияж (брови, губы)</h3>
                        <p className='other__list-el-price'>3000 рублей</p>
                    </li>
                    <li className='other__list-el'>
                        <h3 className='other__list-el-title'>Прокол ушей</h3>
                        <p className='other__list-el-price'>1200 рублей</p>
                    </li>
                </ul>
            </div>
            <div className='other__button-container'>
                <button className='other__button' onClick={handleClick}>Записаться</button>
            </div>
            <Popup popupActive={popupActive} setPopupActive={setPopupActive}/>
        </main>
    )
}
export default Other;