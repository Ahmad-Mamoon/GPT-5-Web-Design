import React from 'react';
import {Footer, Blog, Features, Possibility, Header, GPT5} from './containers';
import {CTA, Brand, Navbar} from './components';
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
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  ) 
}

export default App
