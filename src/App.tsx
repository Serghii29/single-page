import React from 'react';
import { Footer } from './components/footer';
import { Main } from './components/main';
import { Header } from './components/header';
import './styles/app.styles.scss';

function App() {
  return (
    <div className="app-container">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
