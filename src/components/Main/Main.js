import React, { useState } from 'react';
import './Main.css';
import Popup from '../Popup/Popup';

const MainPage = () => {
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
        <main className='main'>
            <div className='main__container'>
                <h1 className='main__title'>Красота, воплощённая в каждой детали!</h1>
                <h2 className='main__subtitle'>Забудьте о повседневных заботах и расслабьтесь в уютной атмосфере нашего салона. У нас вы найдете не только красоту, но и покой для души. Доверьтесь нашему опыту и преданности к красоте, и вы обретете настоящую гармонию с собой.</h2>
                <div className='main__button-container'>
                    <button className='main__button' onClick={handleClick}>
                        Записаться
                    </button>
                    <a className='main__button main__button_white' href='#price'>Услуги</a>
                </div>
            </div>
            <Popup popupActive={popupActive} setPopupActive={setPopupActive}/>
        </main>
    )
}

export default MainPage;