import React from 'react';
import { Link, Nav } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <Link exact to="/">
        Home
      </Link>

      <Link to="/movies">Movies</Link>
    </Nav>
  );
}
