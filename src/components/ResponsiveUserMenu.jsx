import React from 'react'
import '../assets/styles/components/Navbar.scss'

function ResponsiveUserMenu({toggler}) {
    const activeUser = toggler ? 'active-mobile' : '';
    return (
        <>
            <div className={`mobile__menu mobile-user container ${activeUser}`} id='menu-user'>
                User Menu
            </div>  
        </>
    )
}

export default ResponsiveUserMenu
