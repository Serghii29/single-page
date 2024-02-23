import React from 'react';
import { NavBar } from './nav-bar';
import '../styles/header.styles.scss';

export const Header: React.FC = React.memo(() => (
  <header className="header">
    <NavBar />

    <div className="header__container">
      <h1 className="header__title">HELLO WORLD ! My name is Ira</h1>

      <p className="header__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus tristique vulputate
        ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.
      </p>

      <button className="header__button">See Our Project</button>

      <img src="/illustration.png" alt="illustration" className="header__illustration" />
    </div>
  </header>
));
