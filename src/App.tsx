import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap'
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import styled from 'styled-components';
import Buy from './components/buy/buy';
import BuyInfo from './components/buyInfo/buyInfo';
import FAQ from './components/faq/faq';

function App() {
  return (
   <Wrapper>
      <Navbar />
      <Home />
      <Buy />
      <BuyInfo />
      <FAQ />
   </Wrapper>
    
  );
}

export default App;

const Wrapper = styled(Container)`
  width: 100vw;
  height: 100vh;
`