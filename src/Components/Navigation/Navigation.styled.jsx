import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled/macro';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-left: 20px;
`;
export const Link = styled(NavLink)`
  display: inline-block;
  text-transform: uppercase;
  padding: 12px;
  font-weight: 700;
  color: #222c30;
  font-size: 18px;
  &.active {
    color: #2196f3;
    text-decoration: underline;
  }
  &:hover {
    color: #2196f3;
  }
`;

export const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #222c30;
  font-size: 18px;
`;
