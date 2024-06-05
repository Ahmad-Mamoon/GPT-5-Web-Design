import React from 'react';
import {Footer, Blog, Possibility, Blog, Header, GPT5} from './containers';
import {CTA, Brand, Navbar, Article} from './components';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
        <Brand />
        <GPT5 />
        <Feature />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  ) 
}

export default App
