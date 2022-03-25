import styled from 'styled-components'
import {Container, Image} from 'react-bootstrap'
export const Wrapper = styled(Container)`
    @media (max-width: 768px){
        width: 100vw;      
    }
`

export const MainContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border: 2px solid #000;
  height: 300px;
  padding: 16px 32px 24px;
  position: absolute;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
  text-align: center;
  border-radius: 30px 30px 30px 30px;
  background-color: #fff;
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
   text-align: center;
    justify-content: center;
    border-radius: 30px;
    width: 360px;
    height: 110px;
    margin-bottom: 10px;
    background: linear-gradient(104.78deg,#eec95a,#eec95a 97.02%);
    box-shadow: inset 2px 2px 4px hsl(0deg 0% 100% / 25%), inset -2px -2px 6px rgb(149 3 3 / 25%);
    transition: .3s ease-in-out;
    cursor: pointer;
    font-weight: 700;
    font-size: 19px;
    margin-top: 10px;
    color: #fff;
    margin-left: -15px;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const ButtonTitle = styled(Container)`
    color: white;
    font-weight: 600;
`
