import React from 'react';
import { Header } from './AppBar.styled';
import Navigation from '../Navigation/Navigation';

export default function AppBar() {
  return (
    <Header>
      <Navigation />
    </Header>
  );
}
