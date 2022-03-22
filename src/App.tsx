import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap'
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import styled from 'styled-components';
import Buy from './components/buy/buy';
import BuyInfo from './components/buyInfo/buyInfo';
import FAQ from './components/faq/faq';
import Contact from './components/contact/contact'
function App() {
  return (
   <Wrapper>
      <Navbar />
      <Home />
      <Buy />
      <BuyInfo />
      <FAQ />
      <Contact />
   </Wrapper>
    
  );
}

export default App;

const Wrapper = styled(Container)`
  width: 100vw;
  height: 100vh;
`