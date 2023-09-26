import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import MainPage from '../../components/Main/Main';
import Price from '../../components/Price/Price';
import Portfolio from '../../components/Portfolio/Portfolio';
import Reviews from '../../components/Reviews/Reviews';
import Contacts from '../../components/Contacts/Contacts';
import Footer from '../../components/Footer/Footer';
import Upward from '../../utils/Upward/Upward';
import ImagePopup from '../../components/ImagePopup/ImagePopup';

const Main = () => {
    const [selectedCard, setSelectedCard] = useState({});
    const [popupActive, setPopupActive] = useState(false);

    const handleClick = (card) => {
        setPopupActive((state) => !state)
        setSelectedCard(card)
        if (popupActive) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    return (
        <>
            <Header />
            <MainPage />
            <Price />
            <Portfolio onCardClick={handleClick}/>
            <Reviews />
            <Contacts />
            <Footer />
            <Upward />
            <ImagePopup imagePopupActive={popupActive} setImagePopupActive={setPopupActive} card={selectedCard}/>
        </>
    )
}

export default Main;