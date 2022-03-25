import styled from 'styled-components';
import {Button, Col, Container, Form, Row, FormLabel} from 'react-bootstrap'

export const Wrapper = styled(Container)`
    background-color: #6FB1BD;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media(min-width: 992px){
        padding: 160px 0 80px;

    }
`
export const MainContainer = styled(Container)`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const MainRow = styled(Row)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MainCol = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`
export const Title = styled.h3`
   text-align: center!important;
   font-size: calc(1.3rem + .6vw);
   margin-top: 0;
   margin-bottom: .5rem;
   font-weight: 500;
   line-height: 1.2;

    @media (max-width: 768px){
        padding-top: 30px;        
    }
`
export const InputRow = styled(Row)`
    align-items: center !important;
    justify-content: center !important;  
    display: flex;
    flex-direction: column;
`

export const InputCol = styled(Col)`
    margin-top: 3rem!important;
    align-items: center !important;
    justify-content: center !important;  
    display: flex;
    flex-direction: column;
    @media (min-width: 992px){
        flex: 0 0 auto;
        width: 50%;
    }
`

export const InputContainer = styled(Container)`
    margin-bottom: 1rem!important;
    position: relative;
    padding-top: 1.625rem;
    padding-bottom: .625rem;
    

`
export const InputTitle = styled(FormLabel)`
    //font-size: 15px;
    margin-left: 15px;
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
    align-items: center !important;
    justify-content: center !important;  
    display: flex;
    flex-direction: column;
    @media (max-width: 760px) {
        width: calc(100vw - 30px);       
    } 
`

export const ConnectWalletButton = styled(Button)`
    //margin-top: 50px;
   
    background-color: #EFC210;
    padding: 15px;
    width: 300px;
    border-radius: 25px;
    font-weight: bold;
    border: none;
    outline: none;
    color: white;
    height: 60px;
    margin-bottom: 25px;
`