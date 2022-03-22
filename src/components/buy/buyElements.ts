import styled from 'styled-components';
import {Button, Container, Form} from 'react-bootstrap'

export const Wrapper = styled(Container)`
    width: 100vw;
    height: 100%;
    background-color: #6FB1BD;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(min-width: 1024px){
        height: 50vh;
    }
`
export const MainContainer = styled(Container)`
    padding-top: 20px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
   
`

export const Title = styled(Container)`
    font-size: 28px;
    font-weight: 500;
`

export const InputContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    
`
export const InputTitle = styled(Form.Text)`
    font-size: 15px;
    margin-left: 5px;
    color: #436169;

`
export const InputField = styled(Form.Control)`
    background-color: transparent;
    outline: none;
    border-top: none;
    border-bottom: 3px solid black;
    border-right: none;
    border-left: none;
    width: 400px;
    height: 30px;
    margin-top: 5px;
    font-size: 19px;
    @media (max-width: 760px) {
        width: calc(100vw - 30px);       
    } 
`

export const ConnectWalletButton = styled(Button)`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #EFC210;
    padding: 15px;
    width: 400px;
    border-radius: 25px;
    font-weight: bold;
    border: none;
    outline: none;
    color: white;
    height: 60px;
    //margin-bottom: 25px;
    @media (max-width: 760px) {
        width: calc(100vw - 20px);       
    }
`