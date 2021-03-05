import React from 'react'
import '../assets/styles/components/ResponsiveUserMenu.scss'
import avatar from '../assets/static/avatar-yellow.png'

function ResponsiveUserMenu({toggler}) {
    
    const activeUser = toggler ? 'active-mobile' : '';
    
    return (
        <>
            <div className={`mobileUser container ${activeUser}`} id='menu-user'>
                <div className="mobileProfile">
                    <div className="mobileProfile__data">
                        <div className="mobileProfile__img">
                            <img src={avatar} alt="User name"/>
                        </div>
                        <div className="mobileProfile__current-user">
                            <h3>Franco</h3>
                            <h5>Cambiar perfil</h5>
                        </div>       
                    </div>
                    <div className="mobileProfile__settings">
                        <h4>Administrar perfiles</h4>
                    </div>
                    <div className="mobileProfile__notifications">
                        <box-icon name='bell' type='solid' size='sm' color='#fff' ></box-icon>
                        <h3>Notificaciones</h3>
                    </div>
                    <div className="mobileProfile__my-list">
                        <box-icon name='check-square' type='solid' color='#ffffff' ></box-icon>
                        <h3>Mi lista</h3>
                    </div>
                    <div className="mobileProfile__likes">
                        <box-icon name='heart' type='solid' color='#ffffff' ></box-icon>
                        <h3>Favoritos</h3>
                    </div>
                    <div className="mobileProfile__gift">
                        <box-icon name='gift' type='solid' color='#ffffff' ></box-icon>
                        <h3>Invitar a un amigo</h3>
                    </div>
                    <div className="mobileProfile__separator">
                        <hr/>
                    </div>
                    <div className="account">
                        <div className="account__settings">
                            <h4>Cuenta</h4>
                        </div>
                        <div className="account__help">
                            <h4>Centro de ayuda</h4>
                        </div>
                        <div className="account__session">
                            <button className="btn-primary">
                                Cerrar sesion de Netflix
                            </button>
                        </div>
                    </div>
                </div>
                {/**
                 * 
                </div>
            </div>  
                 */}
            </div>  
        </>
    )
}

export default ResponsiveUserMenu
