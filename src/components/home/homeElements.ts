import styled from "styled-components";
import {Col, Container, Row} from 'reactstrap'
import background from '../../assets/banner.png'

export const Wrapper = styled(Container)`
    background: url(${background});
    background-position: 50%;
    background-repeat: no-repeat!important;
    background-size: cover;
    
    

    @media (min-width: 992px){
        height: 100vh;

    }
`
export const MainContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    @media (min-width: 2560px){
        height: 55%;
        
    }
`

export const MainRow = styled(Row)`
    padding: 8rem 0;

`

export const MainCol = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column!important;
    
    @media (min-width: 992px) {
        flex: 0 0 auto;
        //width: 100%;
    }
`
export const Title = styled.h1`
    color: white;
    font-size: 4rem;
    color: white;
    z-index: 99;
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 1rem!important;
    @media (max-width: 1024px){
        font-size: 4.2rem;
    }
    @media (max-width: 768px){
        font-size: 3.5rem;
    }
    @media (max-width: 320px){
        font-size: 1.67rem;
    }
`
export const Subtitle = styled.h3`
    color: rgba(255,255,255,1) !important;
    margin-bottom: 1rem!important;
    margin-top: 1rem!important;
    font-size: calc(1.3rem + .6vw);
    font-weight: 500;
    line-height: 1.2;
    @media (min-width: 1200px){
        font-size: 1.75rem;
    }
`
export const TimerRow = styled(Row)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 40px;
`

export const TimerCol = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;

    & > span{
        
        width: 110px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const TimerValue = styled.span`
    height: 80px;
    font-size: 35px;
    margin-bottom: -22px;
    font-weight: bold;
`

export const TimerText = styled.span`
    font-weight: 400;
    height: 30px;
    font-size: 19px;
    color: white;
    font-family: "Helvetica Neu",Helvetica,"Segoe UI",Arial,sans-serif;
`

export const EndTitle = styled.h3`
    color: rgba(255,255,255,1) !important;
    margin-bottom: 1rem!important;
    font-size: calc(1.3rem + .6vw);
    font-weight: 500;
    line-height: 1.2;
    @media (min-width: 1200px){
        font-size: 1.75rem;
    }
`