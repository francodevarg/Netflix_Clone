import React from 'react'
import '../assets/styles/components/Navbar.scss';

function ResponsiveBurgerMenu({toggler}) {
    const activeBurger = toggler ? 'active-mobile' : '';
    return (
        <>
            <div className={`mobile__menu mobile-burger container ${activeBurger}`} id='menu-burger'>
                <ul className='mobile-burger__items'>
                    <li className='mobile-burger__item'>
                        <a className='mobile-burger__link mobile-burger__link--active' href='#Ssas'>
                        Inicio
                        </a>
                    </li>
                    <li className='mobile-burger__item'>
                        <a className='mobile-burger__link' href='#Svf'>
                        Series
                        </a>
                    </li>
                    <li className='mobile-burger__item'>
                        <a className='mobile-burger__link' href='#Ssawq'>
                        Películas
                        </a>
                    </li>
                    <li className='mobile-burger__item'>
                        <a className='mobile-burger__link' href='#Sgadsa'>
                        Novedades populares
                        </a>
                    </li>
                    <li className='mobile-burger__item'>
                        <a className='mobile-burger__link' href='#Sbttt'>
                        Ver de nuevo
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ResponsiveBurgerMenu
