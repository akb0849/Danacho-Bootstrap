import styled from 'styled-components';
import {Container} from 'react-bootstrap'
export const Wrapper = styled(Container)`
width: 100%;
background-color: #6FB1BD;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

export const MainContainer = styled(Container)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
//padding-top: 20px;
`

export const TopContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column ;
    }
`

export const BottomContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        padding-top: 0;
    }  
`

export const LeftContainer = styled(Container)`
    display: flex;
    margin-left: 80px;
    margin-top: 100px;
    & > img{
        width: 90px;
        height: 90px;
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column ;
        align-items: center;
        justify-content: center;
        margin-right: 70px;
    }
`

export const RightContainer = styled(Container)`
display: flex;
flex-direction: column;
@media (max-width: 768px) {
        flex-direction: column ;
    }

`

export const TopFieldContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    
    @media (max-width: 768px) {
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
    }
    
`

export const BottomFieldContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin-right: 50px;
    @media (max-width: 768px) {
        flex-direction: column ;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
  

`

export const TopField = styled.input`
    margin-top: 20px;
    width: 200px;
    background: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid white;
    outline:none;
    color: white;
    height: 30px;
    margin-left: 25px;
    &::placeholder{
        color: white
    }
    @media (max-width: 576px) {
        
    }
    @media (max-width: 768px){
        width: calc(100vw - 70px);
        margin-left: 50px;
    }
`

export const BottomField = styled.input`
    margin-top: 20px;
    width: 423px;
    background: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid white;
    outline:none;
    color: white;
    height: 30px;
    &::placeholder{
        color: white
    }

    @media (max-width: 768px) {
        flex-direction: column ;
        display: flex;
        width: calc(100vw - 70px);
        margin-right: 0;
    }
`

export const Footer = styled(Container)`
    color: white;
    margin-top: 20px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column ;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }
`

export const Title = styled(Container)`
    color: white;
    font-size: 23px;
    margin-top: 40px;
    margin-left: 23px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column ;
        align-items: center;
        justify-content: center;
    }
`
export const SendButton = styled(Container)`
    display: flex;
    width: 100px;
    margin-top: 20px;
    margin-left: 25px;
    height: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    background-color: white;
    color: black;
    border-radius: 12px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column ;
        align-items: center;
        justify-content: center;
        margin-left:110px;
    }
`