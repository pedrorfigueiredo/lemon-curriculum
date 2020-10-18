import React from 'react';
import { FiUser, FiCoffee } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';
import { GiScrollUnfurled } from 'react-icons/gi';
import { BiBookBookmark } from 'react-icons/bi';
import { Wrapper, NavItem } from './styles';

function Appbar() {
  return (
    <Wrapper>
      <NavItem exact to="/">
        <FiUser />
      </NavItem>
      <NavItem to="/skills">
        <BiBookBookmark />
      </NavItem>
      <NavItem to="/experience">
        <FiCoffee />
      </NavItem>
      <NavItem to="/education">
        <SiGooglescholar />
      </NavItem>
      <NavItem to="/certifications">
        <GiScrollUnfurled />
      </NavItem>
    </Wrapper>
  );
}

export default Appbar;
