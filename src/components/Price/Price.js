import React from 'react';
import './Price.css';
import { Link } from 'react-router-dom';
import nailServImg from '../../images/nailsserv.jpg';
import hairServImg from '../../images/hair-serv.jpg';
import otherServImg from '../../images/more.jpg';

const Price = () => {
    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <section className='price' id='price'>
            <h2 className='price__title'>
                <span className='price__title-span'>01 — Услуги</span>
            </h2>
            <div className='price__content'>
                <ul className='price__list'>
                    <li className='price__list-el'>
                        <Link className='price__list-el-link' to='/nail-services' onClick={handleClick}>
                            <div className='price__list-el-link-img-container'>
                                <img src={nailServImg} alt='Ногтевой сервис' className='price__list-el-link-img price__list-el-link-img_manicure'></img>
                            </div>
                            <h3 className='price__list-el-link-title'>Ногтевой сервис</h3>
                            <p className='price__list-el-link-description'>Любые виды маникюра, наращивание, дизайн...</p>
                            <p className='price__list-el-link-button'>Узнать больше</p>
                        </Link>
                    </li>
                    <li className='price__list-el'>
                        <Link className='price__list-el-link' to='/hairdressing-services' onClick={handleClick}>
                            <div className='price__list-el-link-img-container'>
                                <img src={hairServImg} alt='Парикмахерские услуги' className='price__list-el-link-img price__list-el-link-img_haircut'></img>
                            </div>
                            <h3 className='price__list-el-link-title'>Парикмахерские услуги</h3>
                            <p className='price__list-el-link-description'>Любые виды стрижек, окрашивание, мелирование...</p>
                            <p className='price__list-el-link-button'>Узнать больше</p>
                        </Link>
                    </li>
                    <li className='price__list-el'>
                        <Link className='price__list-el-link' to='/other' onClick={handleClick}>
                            <div className='price__list-el-link-img-container'>
                                <img src={otherServImg} alt='Другие услуги' className='price__list-el-link-img price__list-el-link-img_another'></img>
                            </div>
                            <h3 className='price__list-el-link-title'>Другое</h3>
                            <p className='price__list-el-link-description'>Наращивание, ламинирование ресниц, окрашивание бровей...</p>
                            <p className='price__list-el-link-button'>Узнать больше</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Price;