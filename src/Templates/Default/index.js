import React, { useContext, useState } from 'react';
import { Container, Theme, Logo, Profile } from './styles';
import LogoDark from '../../static/images/logo.png';
import iconMenu from '../../static/images/iconMenu.png';
import Menu from '../../Components/Menu';
import { ContextAuth, ContextPlay, ContextTheme } from '../../Context';
import PlayerMusic from '../../Components/PlayerMusic';

function Template({children}) {
  const {token, setToken} = useContext(ContextAuth);
  const [openMenu, setOpenMenu] = useState(false);
  const {tema,setTema} = useContext(ContextTheme);
  const {itemPlay, setItemPlay} = useContext(ContextPlay);

  function handleOpenMenu(){
    setOpenMenu(!openMenu);
  }

  return (
        <>
          <Theme theme={tema} />
          <Container>
            <Logo 
              src={LogoDark}
            />
            {token &&
              <>
                <Profile 
                  onClick={handleOpenMenu}>
                  <img src={iconMenu} />
                </Profile>
                <Menu openMenu={openMenu} />
              </>
            }
            {children}
            {
              itemPlay&&<PlayerMusic 
              item={itemPlay} 
              />
            }
          </Container>
        </>
      )
}

export default Template;