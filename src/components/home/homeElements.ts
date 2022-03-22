import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import bg from '../../assets/banner.png'

export const Wrapper = styled(Container)`
    width: 100%;
    height: 100vh;
    background: url(${bg});
    background-position: 0;
    background-size: 100vw 100vh;
    background-repeat:no-repeat;
`
export const MainContainer = styled(Container)`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
`

export const Title = styled(Container)`
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 64px;
    @media (max-width: 768px){
        font-size: 32px;
        margin-top: 0px;
    }
`
export const Subtitle = styled(Container)`
    color: white;
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size:32px;
    @media (max-width: 768px){
        margin-top: 5px;
        font-size: 24px;
    }
`
export const TimerWrapper = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    padding-top: 20px;
    font-weight: 600;
    font-size: 28px;
    color: white;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (min-width: 1440px){
        width: 40%;
    }
    @media (min-width: 2560px){
        width: 30%;
    }
    
`
export const TimerContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
`

export const TimerRow = styled(Row)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;   
   
`

export const TimerCol = styled(Col)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`

export const TimerValue = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    @media (max-width: 768px){
        margin-top: 5px;
        font-size: 20px;
    }
`

export const TimerTitle = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (max-width: 768px){
        margin-top: 0px;
        font-size: 20px;
    }
`
