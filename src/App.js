import './App.scss';
import React from 'react'


import { Navbar, About, Footer, Header, Work, Testimonial, Skills } from './container';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />

    </div>
  );
}

export default App; 