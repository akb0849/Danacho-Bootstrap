import styled from 'styled-components'
import {Container} from 'react-bootstrap' 

export const Wrapper = styled(Container)`
width: 100vw;
height: 100%;
background-color: #6FB1BD;

`

export const MainContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    @media (max-width: 768px) {
        width: 100vw;       
        height: 100%;
        background-color: inherit;
        margin-top: 20px;
    } 
`
export const InfoWrapper = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    @media (max-width: 768px) {
        width: 100vw;       
        height: 100%;
        background-color: inherit;
        margin-top: 30px;
    } 
`
export const InfoContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    height: 100%;
    @media (max-width: 768px) {
        width: 100vw;       
        height: 100%;
        background-color: inherit;
        
    } 
`

export const InfoTitle = styled(Container)`
    font-weight: 600;
    //margin-top: 10px;
    font-size: 28px;
    @media(max-width: 760px){
    font-size: 20px;
  }
`

export const InfoDescription = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    margin-top: 10px;
    width: 550px;
    height: 100%;
    padding-bottom: 20px;
    background-color: inherit;
    @media (max-width: 760px) {
        width: calc(100vw - 20px);       
        height: 100%;
    } 
`