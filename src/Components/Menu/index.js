import React,{ useContext } from 'react';
import { Menu,MenuItem  } from './styles';
import { ContextAuth, ContextTheme } from '../../Context';

function MenuContainer({openMenu}) {
  const {token, setToken} = useContext(ContextAuth);
  const {tema,setTema} = useContext(ContextTheme);
  function handleLogout(){
    setToken('');
    localStorage.removeItem('jwt');
  }
  function handleTema(){
    if(tema==='dark'){
      setTema('light');
    }
    if(tema==='light'){
      setTema('dark');
    }
  }
  return <Menu openMenu={openMenu}>
{/*   <MenuItem openMenu={openMenu}>
    Meu perfil
  </MenuItem> */}
  <MenuItem 
  openMenu={openMenu}
  onClick={handleTema}
  >
    Tema: {tema}
  </MenuItem>
  <MenuItem 
    onClick={handleLogout} 
    openMenu={openMenu}
  >
    Sair
  </MenuItem>
</Menu>;
}

export default MenuContainer;