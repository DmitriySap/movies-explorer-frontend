import React from 'react';
import './Contacts.css';
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import vkIcon from '../../images/vk-icon.svg';
import instIcon from '../../images/inst-icon.svg';

const Contacts = () => {
    const defaultMapState = {
        center: [51.500867, 46.127733],
        zoom: 18,
    }

    return (
        <section className='contacts' id='contacts'>
            <h2 className='contacts__title'>
                <span className='contacts__title-span'>04 — Контакты</span>
            </h2>
            <div className='contacts__wrapper'>
                <YMaps>
                    <Map className='contacts__map' defaultState={defaultMapState}>
                        <Placemark geometry={[51.500867, 46.127733]} options={
                            {
                                preset: 'islands#redIcon',
                            }
                        }/>
                    </Map>
                </YMaps>
                <p className='contacts__adress'>Площадь Свободы, 3а к1​3 секция, 1 этаж</p>
                <div className='contacts__content'>
                    <p className='contacts__phone-number'>+7‒908‒550‒70‒49</p>
                    <ul className='social__links'>
                        <li className='social__link'>
                            <Link className='social__link-container' to='https://vk.com/' target='_blank'>
                                <img className='social__link-image' alt='Социальная сеть' src={vkIcon}></img>
                                <p className='social__link-link social__link-link_vk'>Вконтакте</p>
                            </Link>
                        </li>
                        <li className='social__link'>
                            <Link className='social__link-container' to='https://instagram.com/' target='_blank'>
                                <img className='social__link-image' alt='Социальная сеть' src={instIcon}></img>
                                <p className='social__link-link social__link-link_insta'>Instagram</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contacts;