import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
           <div className='footer__content'>
                <div className='footer__copyright'>
                    <p className='footer__logo'>INDIGO</p>
                    <p className='footer__copyright-copyright'>&copy; 2023 Indigo</p>
                </div>
                <div className='footer__lists'>
                    <ul className='footer__list'>
                        <h3 className='footer__list-title'>Контакты</h3>
                        <li className='footer__list-el'>
                            <a className='footer__list-el-link' href='https://vk.com/salon_indigo_engels' target='_blank' rel='noreferrer'>Вконтакте</a>
                        </li>
                        <li className='footer__list-el'>
                            <a className='footer__list-el-link' href='https://instagram.com/salon_indigo_engels?igshid=OGQ5ZDc2ODk2ZA==' target='_blank' rel='noreferrer'>Instagram</a>
                        </li>
                    </ul>
                    <ul className='footer__list'>
                        <h3 className='footer__list-title'>Made by</h3>
                        <li className='footer__list-el'>
                            <a className='footer__list-el-link' href='https://e.mail.ru/compose/' target='_blank' rel='noreferrer'>saprykindima@bk.ru</a>
                        </li>
                        <li className='footer__list-el'>
                            <a className='footer__list-el-link' href='https://vk.com/saprykin03' target='_blank' rel='noreferrer'>vk.com/saprykin03</a>
                        </li>
                        <li className='footer__list-el'>
                            <a className='footer__list-el-link' href='https://t.me/saprykin03' target='_blank' rel='noreferrer'>t.me/saprykin03</a>
                        </li>
                    </ul>
                </div>
           </div>
        </footer>
    ) 
}

export default Footer;