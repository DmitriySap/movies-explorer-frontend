import React from 'react';
import './ImagePopup.css';
import closeIcon from '../../images/CloseIcon.svg';

const ImagePopup = ({ imagePopupActive, setImagePopupActive, card }) => {
    const handleClick = () => {
        setImagePopupActive((state) => !state)
        if (imagePopupActive) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    };

    return (
        <div className={ imagePopupActive ? 'image-popup image-popup_active' : 'image-popup' } onClick={handleClick}>
            <div className={ imagePopupActive ? 'image-popup__content image-popup__content_active' : 'image-popup__content' } onClick={e => e.stopPropagation()}>
                <img className='image-popup__close-icon' src={closeIcon} alt='Закрыть' onClick={handleClick}></img>
                <img className='image-popup__card' src={card.link} alt={card.name}></img>
                <p className='image-popup__title'>{card.name}</p>
            </div>
        </div>
    )
}

export default ImagePopup;