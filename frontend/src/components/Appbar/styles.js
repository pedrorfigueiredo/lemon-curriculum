import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: ${(props) => props.theme.color.primary};
  display: none;
  z-index: 2;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavItem = styled(NavLink)`
  flex: 1;
  font-size: ${(props) => props.theme.fontSize.gigantic};
  text-decoration: none;
  border-top: 3px solid ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.fontColor.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  :hover,
  &.active {
    background: ${(props) => props.theme.color.primaryDark};
    border-top: 3px solid ${(props) => props.theme.color.primaryDark};
    color: ${(props) => props.theme.fontColor.white};
  }
  &.active {
    border-top: 3px solid ${(props) => props.theme.color.secondaryLight};
  }
`;
