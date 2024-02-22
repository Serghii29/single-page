import React from 'react';
import '../styles/footer.styles.scss';

// const footerInfo = [
//   {
//     title: 'About US',
//     About: '/',
//     'What We Do': '/',
//     Project: '/',
//     'How It Work With Us': '/',
//   },
//   {
//     title: 'Follow',
//     Instagram: 'https://www.instagram.com/',
//     Facebook: 'https://www.facebook.com/',
//     LinkedIn: 'https://www.linkedin.com/',
//     Youtube: 'https://www.youtube.com/',
//   },
// ];

export const Footer: React.FC = React.memo(() => (
  <footer className="footer">
    <div className="footer__content-wraper">
      <section className="footer__description">
        <div className="footer__text-wraper">
          <h2 className="footer__title">Intersted to work with our team?</h2>

          <p className="footer__item">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <button type="button" className="footer__button">
          {'Let\'s Talk'}
        </button>
      </section>

      <section className="footer__info">
        <div className="footer__contacts">
          <a href="/">
            <img src="/footer-logo.png" alt="logo" className="footer__logo" />
          </a>

          <div className="footer__contact-container">
            <p>A.</p>
            <a href="/" className="footer__link">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </a>
          </div>

          <div className="footer__contact-container">
            <p>T.</p>
            <a href="tel: +38 091 234 56 78" className="footer__link">
              +38 091 234 56 78
            </a>
          </div>

          <div className="footer__contact-container">
            <p>E.</p>
            <a href="mailto: hello.ira@gmail.com" className="footer__link">
              hello.ira@gmail.com
            </a>
          </div>
        </div>

        <div className="footer__link-container">
          <h3 className="footer__link-header">About US</h3>

          <div className="footer__contact-container">
            <a href="/" className="footer__link">
              About
            </a>
          </div>

          <div className="footer__contact-container">
            <a href="/" className="footer__link">
              What We Do
            </a>
          </div>

          <div className="footer__contact-container">
            <a href="/" className="footer__link">
              Project
            </a>
          </div>

          <div className="footer__contact-container">
            <a href="/" className="footer__link">
              How It Work With Us
            </a>
          </div>
        </div>

        <div className="footer__link-container">
          <h3 className="footer__link-header">Follow</h3>

          <div className="footer__contact-container">
            <a href="https://www.instagram.com/" className="footer__link">
              Instagram
            </a>
          </div>

          <div className="footer__contact-container">
            <a href="https://www.facebook.com/" className="footer__link">
              Facebook
            </a>
          </div>

          <div className="footer__contact-container">
            <a href="https://www.linkedin.com/" className="footer__link">
              LinkedIn
            </a>
          </div>

          <div className="footer__contact-container">
            <a href="https://www.youtube.com/" className="footer__link">
              Youtube
            </a>
          </div>
        </div>
      </section>

      <p className="footer__rights">2019 © All rights reserved.</p>
    </div>
  </footer>
));
