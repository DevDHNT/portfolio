import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/Services/Services';
import Qualification from './components/faculdade/Qualification';
import Work from './components/work/Work';
import Testemunhas from './components/testemunhas/Testemunhas';
import Contato from './components/contact/Contato';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Work />
      <Testemunhas />
      <Contato />
    </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App