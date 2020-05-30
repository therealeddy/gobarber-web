import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import Logo from '~/images/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Diego Fernandes</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/40/abott@adorable.png"
              alt="Diego Fernandes"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
