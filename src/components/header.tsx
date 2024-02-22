import React from 'react';
import { NavBar } from './nav-bar';
import '../styles/header.styles.scss';

export const Header: React.FC = React.memo(() => (
  <header className="header">
    <NavBar />

    <div className="header__container">
      <h1 className="header__title">
        HELLO WORLD !
        <br />
        My name is Ira
      </h1>

      <p className="header__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        <br />
        elit.Faucibus tristique vulputate ultrices ut mauris
        <br />
        tellus at. Posuere sollicitudin odio tellus elit.
      </p>

      <button className="header__button">
        See Our Project
      </button>
    </div>
  </header>
));
