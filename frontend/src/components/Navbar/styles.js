import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 0;
  height: 100vh;
  background: ${(props) => props.theme.color.primary};
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 10px 20px;
  border-left: 5px solid ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSize.large};
  text-decoration: none;
  color: ${(props) => props.theme.fontColor.dark};
  transition: 0.2s;
  :hover,
  &.active {
    background: ${(props) => props.theme.color.primaryDark};
    border-left: 5px solid ${(props) => props.theme.color.primaryDark};
    color: ${(props) => props.theme.fontColor.white};
  }
  &.active {
    border-left: 5px solid ${(props) => props.theme.color.secondaryLight};
  }
`;
