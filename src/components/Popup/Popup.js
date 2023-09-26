import React from 'react';
import './Popup.css';
import { Link } from 'react-router-dom';
import vkIcon from '../../images/vk-icon.svg';
import instIcon from '../../images/inst-icon.svg';
import closeIcon from '../../images/CloseIcon.svg';

const Popup = ({ popupActive, setPopupActive }) => {
    const handleClick = () => {
        setPopupActive((state) => !state)
        if (popupActive) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    };

    return (
        <div className={ popupActive ? 'popup popup_active' : 'popup' } onClick={handleClick}>
            <div className={ popupActive ? 'popup__content popup__content_active' : 'popup__content' } onClick={e => e.stopPropagation()}>
                <img className='popup__close-icon' src={closeIcon} alt='Закрыть' onClick={handleClick}></img>
                <p className='popup__phone-number'>+7‒908‒550‒70‒49</p>
                    <ul className='popup__list'>
                        <li className='popup__list-el'>
                            <Link className='popup__link-container' to='https://vk.com/' target='_blank'>
                                <img className='popup__link-image' alt='Социальная сеть' src={vkIcon}></img>
                                <p className='popup__link-link popup__link-link_vk'>Вконтакте</p>
                            </Link>
                        </li>
                        <li className='popup__list-el'>
                            <Link className='popup__link-container' to='https://instagram.com/' target='_blank'>
                                <img className='popup__link-image' alt='Социальная сеть' src={instIcon}></img>
                                <p className='popup__link-link popup__link-link_insta'>Instagram</p>
                            </Link>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default Popup;