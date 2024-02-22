import React from 'react';
import '../styles/main.styles.scss';
import { Form } from './form';

const mainInfo = [
  {
    header: 'Bring Technology To Your',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
    image: '/two.png',
  },

  {
    header: 'Make Your business To Be Better Famous',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
    image: '/one.png',
  },

  {
    header: 'Build Your Digital Product That Suitable',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
    image: '/three.png',
  },
];

export const Main: React.FC = React.memo(() => (
  <main className="main">
    <div className="main__content-wraper">
      <h2 className="main__header">
        What we do to help our client grow in digital era?
      </h2>

      {mainInfo.map(({
        header, description, link, image,
      }) => (
        <div className="main__block-info">
          <img src={image} alt="block icon" />
          <h3 className="main__block-header">{header}</h3>
          <p className="main__block-description">{description}</p>

          <a href={link} className="main__block-link">Learn more</a>
        </div>
      ))}

      <Form />
    </div>
  </main>
));
