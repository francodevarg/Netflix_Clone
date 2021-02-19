import React , {useState} from 'react'
import avatarYellow from '../assets/static/avatar-yellow.png'
import avatarGrayBlue from '../assets/static/avatar-gray-blue.png'
import avatarKids from '../assets/static/avatar-kids.png'
import '../assets/styles/components/Profile.scss';

function ProfileMenu() {

    const [toggle, setToggle] = useState(false); 

    const toggleMenuProfile = () => (toggle ? setToggle(false) : setToggle(true))

    const openMenu = toggle ? '' : 'no-display';

    return (
        <>
            <button className="profile" onClick={toggleMenuProfile} type='button'>
                <figure>
                    <img className='avatar-profile' src={avatarYellow} alt=""/>
                </figure>
                <box-icon name='chevron-down' size='sm' color='#ffffff' ></box-icon>
            </button>
            <div className={`profile__menu ${openMenu}`}>
                <ul className="profile-list">
                    <li className="profile__item">

                        <figure>
                            <img className='avatar-profile' src={avatarGrayBlue} alt=""/>
                        </figure>
                        <div>
                            Invitado

                        </div>
                        
                    </li>
                    <li className="profile__item">

                        <figure>
                            <img className='avatar-profile' src={avatarKids} alt=""/>
                        </figure>
                        <div>

                        Niños
                        </div>
                    </li>
                    <li className="profile__item">Administrar perfiles</li>
                    <hr/>
                    <li className="profile__item">Cuenta</li>
                    <li className="profile__item">Centro de ayuda </li>
                    <li className="profile__item">Cerrar sesión en Netflix</li>
                </ul>


            </div>


        </>
    )
}

export default ProfileMenu
