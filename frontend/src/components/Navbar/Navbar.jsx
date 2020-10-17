import React from 'react';
import { Wrapper, NavItem } from './styles';

function Navbar() {
  return (
    <Wrapper>
      <NavItem exact to="/">
        Perfil
      </NavItem>
      <NavItem to="/education">Formação</NavItem>
      <NavItem to="/skills">Habilidades</NavItem>
      <NavItem to="/certifications">Certificações</NavItem>
    </Wrapper>
  );
}

export default Navbar;
