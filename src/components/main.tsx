import React from 'react';
import { Form } from './form';
import '../styles/main.styles.scss';

const mainInfo = [
  {
    header1: 'Bring Technology',
    header2: 'To Your',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
    image: '/two.png',
  },

  {
    header1: 'Make Your business',
    header2: 'To Be Better Famous',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
    image: '/one.png',
  },

  {
    header1: 'Build Your Digital Product',
    header2: 'That Suitable',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/',
    image: '/three.png',
  },
];

export const Main: React.FC = React.memo(() => (
  <main className="main">
    <div className="main__content">
      <div className="main__content-wraper">
        <h2 className="main__header">What we do to help our client grow in digital era?</h2>

        {mainInfo.map(({
          header1, header2, description, link, image,
        }) => (
          <div className="main__block-info" key={header1}>
            <img src={image} alt="block icon" className="main__block-image" />
            <h3 className="main__block-header">{header1}</h3>
            <h3 className="main__block-header">{header2}</h3>
            <p className="main__block-description">{description}</p>

            <a href={link} className="main__block-link">
              Learn more
              <img src="/arrow-forward.png" alt="arrow-forward" />
            </a>
          </div>
        ))}
      </div>

      <Form />
    </div>

    <img
      src="ellipse1.png"
      alt="background-img one"
      className="main__background-img-1 main__index-img"
    />
    <img
      src="/ellipse2.png"
      alt="background-img"
      className="main__background-img-2 main__index-img"
    />
    <img
      src="/ellipse3.png"
      alt="background-img"
      className="main__background-img-3 main__index-img"
    />
    <img
      src="/ellipse4.png"
      alt="background-img"
      className="main__background-img-4 main__index-img"
    />
    <img
      src="/ellipse5.png"
      alt="background-img"
      className="main__background-img-5 main__index-img"
    />
  </main>
));
