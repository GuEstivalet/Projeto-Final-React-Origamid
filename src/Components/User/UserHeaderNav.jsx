import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Button from '../Forms/Button'
import UserContext from '../../UserContext'
import Feed from '../../Assets/componentsSvg/Feed'
import Estatisticas from '../../Assets/componentsSvg/Estatisticas'
import Adicionar from '../../Assets/componentsSvg/Adicionar'
import Sair from '../../Assets/componentsSvg/Sair'
import styles from './UserHeaderNav.module.css'
import { useNavigate } from 'react-router-dom';
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
    const navigate = useNavigate();
    const {userLogout} = React.useContext(UserContext);
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = React.useState(false);

    const {pathname} = useLocation();

    React.useEffect(() =>{
      setMobileMenu(false);
    },[pathname] );

    function handleLogout() {
        userLogout();
        navigate('/login');
    }

  return (
    <>
    {mobile && <button aria-label='Menu' className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={()=> setMobileMenu(!mobileMenu) }></button>}
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
      <NavLink to='/conta' end><Feed/>{mobile && 'Minhas Fotos'}</NavLink>
      <NavLink to='/conta/estatisticas'><Estatisticas/>{mobile && 'Estatísticas'}</NavLink>
      <NavLink to='/conta/postar'><Adicionar/>{mobile && 'Adicionar Foto'}</NavLink>
      <Button onClick={handleLogout}><Sair/>{mobile && 'Sair'}</Button>
    </nav>
    </>
  )
}

export default UserHeaderNav
