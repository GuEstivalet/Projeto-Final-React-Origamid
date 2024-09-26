import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Forms/Button'
import UserContext from '../../UserContext'
import Feed from '../../Assets/componentsSvg/Feed'
import Estatisticas from '../../Assets/componentsSvg/Estatisticas'
import Adicionar from '../../Assets/componentsSvg/Adicionar'
import Sair from '../../Assets/componentsSvg/Sair'
import styles from './UserHeaderNav.module.css'
import { useNavigate } from 'react-router-dom';

const UserHeaderNav = () => {

    
    const navigate = useNavigate();
    const {userLogout} = React.useContext(UserContext);
    const [mobile,setMobile] = React.useState(null);

    function handleLogout() {
        userLogout();
        navigate('/login');
    }

  return (
    <nav className={styles.nav}>
      <NavLink to='/conta' end><Feed/>{mobile && 'Minhas Fotos'}</NavLink>
      <NavLink to='/conta/estatisticas'><Estatisticas/>{mobile && 'Estatísticas'}</NavLink>
      <NavLink to='/conta/postar'><Adicionar/>{mobile && 'Adicionar Foto'}</NavLink>
      <Button onClick={handleLogout}><Sair/>{mobile && 'Sair'}</Button>
    </nav>
  )
}

export default UserHeaderNav
