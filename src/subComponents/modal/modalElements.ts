import styled from 'styled-components'
import {Container, Image} from 'react-bootstrap'
export const Wrapper = styled(Container)`
    width: 100%;
    height: 100%;    
    @media (max-width: 768px){
        width: 100vw;      
    }
`

export const MainContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 250px;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;

  @media (max-width: 760px) {
      width: calc(100% - 20px);
  }
`

export const ConnectWalletButton = styled(Container)`
    color: white;
    font-size: 18px;
    @media (max-width: 768px){
        color: white;        
    }
`

export const ButtonContainer = styled(Container)``

export const Logo = styled(Image)`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`
export const ConnectButton = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 450px;
    height: 90px;
    border: 1px solid black;
    border-radius: 20px;
    margin-top: 20px;
    background-color: #EEC95A;

    @media (max-width: 760px) {
      width: calc(100vw - 100px);
    }

`
export const ButtonTitle = styled(Container)`
    color: white;
    font-weight: 600;
`
