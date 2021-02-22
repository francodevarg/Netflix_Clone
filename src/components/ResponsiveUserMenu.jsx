import React from 'react'
import '../assets/styles/components/ResponsiveUserMenu.scss'
import avatar from '../assets/static/avatar-yellow.png'

function ResponsiveUserMenu({toggler}) {
    const activeUser = toggler ? 'active-mobile' : '';
    return (
        <>
            <div className={`mobile__menu mobile-user container ${activeUser}`} id='menu-user'>
                <div className="mobile-user__profile">
                    <div className="profile__data">
                        <div className="profile__img">
                            <img src={avatar} alt="User name"/>
                        </div>
                        <div className="profile__current-user">
                            <h3>Franco</h3>
                            <h5>Cambiar perfil</h5>
                        </div>       
                    </div>
                    <div className="profile__settings">
                        <h4>Administrar perfiles</h4>
                    </div>
                    <div className="profile__notifications">
                        <box-icon name='bell' type='solid' size='sm' color='#fff' ></box-icon>
                        <h3>Notificaciones</h3>
                    </div>
                    <div className="profile__gift">
                        <box-icon name='gift' type='solid' color='#ffffff' ></box-icon>
                        <h3>Invitar a un amigo</h3>
                    </div>
                    <div className="profile__separator">
                        <hr/>
                    </div>
                    <div className="account__settings">
                        <h4>Cuenta</h4>
                    </div>
                    <div className="account__help">
                        <h4>Centro de ayuda</h4>
                    </div>
                    <div className="profile__session">
                        <button className="btn-primary">
                            Cerrar sesion de Netflix
                        </button>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default ResponsiveUserMenu
