import React from 'react';
import '../styles/nav-bar.styles.scss';

export const NavBar: React.FC = React.memo(() => (
  <nav className="nav">
    <a href="/">
      <img src="/logo.png" alt="logo" className="nav__logo" />
    </a>

    <button type="button" className="nav__menu">
      <img src="/burger-menu.png" alt="burger menu" />
      {}
    </button>
  </nav>
));
