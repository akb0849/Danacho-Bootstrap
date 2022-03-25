import styled from 'styled-components';
import {Button, Container} from 'react-bootstrap'
import ScrollToTop from 'react-scroll-to-top';
import {ArrowUpShort} from '@styled-icons/bootstrap/ArrowUpShort'
export const Wrapper = styled(Container)`
    width: 100%;
    background-color: #6FB1BD;
    position: relative;
   
`

export const MainContainer = styled(Container)`
`

export const TopContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 768px) {
        flex-direction: column ;
    }
`

export const BottomContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LeftContainer = styled(Container)`
    display: flex;
    padding-top: 55px;
    & > img{
        height: 80px;
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column ;
        align-items: center;
        justify-content: center;
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
export const SendButton = styled(Button)`
    background: #fff;
    width: 100px;
    padding: .5rem 1.9rem;
    border: none;
    border-radius: 10px;
    color: #000;
    margin-left: 25px;
    margin-top: 1rem!important;
    
`
export const BackScroll = styled(ScrollToTop)`
    background-color: rgba(254,164,30,.8627450980392157);
    width: 40px;
    height: 42px;
    position: absolute;
    left: 93%;
    top: 84%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none; 
    outline: none;
    @media (max-width: 786px){
        left: 85%
    }

`
export const ArrowUp = styled(ArrowUpShort)`
    width: 25px;
    height: 25px;
    color: black;
    
`