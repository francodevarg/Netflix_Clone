import React from 'react'
import '../assets/styles/components/ResponsiveBurgerMenu.scss'


function ResponsiveBurgerMenu({toggler}) {
    const activeBurger = toggler ? 'active-mobile' : '';
    return (
        <>
            <div className={`mobileBurger container ${activeBurger}`} id='menu-burger'>
                <ul className='mobileBurgerList'>
                    <li className='mobileBurger__item'>
                        <a className='mobileBurger__link mobileBurger__link--active' href='#Ssas'>
                        Inicio
                        </a>
                    </li>
                    <li className='mobileBurger__item'>
                        <a className='mobileBurger__link' href='#Svf'>
                        Series
                        </a>
                    </li>
                    <li className='mobileBurger__item'>
                        <a className='mobileBurger__link' href='#Ssawq'>
                        Películas
                        </a>
                    </li>
                    <li className='mobileBurger__item'>
                        <a className='mobileBurger__link' href='#Sgadsa'>
                        Novedades populares
                        </a>
                    </li>
                    <li className='mobileBurger__item'>
                        <a className='mobileBurger__link' href='#Sbttt'>
                        Ver de nuevo
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ResponsiveBurgerMenu
