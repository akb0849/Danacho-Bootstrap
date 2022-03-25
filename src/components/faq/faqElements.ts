import styled from 'styled-components'
import {Container, Row, Col} from 'react-bootstrap'
import { Collapse } from "antd";
import {Plus} from '@styled-icons/boxicons-regular/Plus'

;

export const Wrapper = styled(Container)`
    background-color: #FBEDB1;
    justify-content: center;

    
`

export const MainRow = styled(Row)`
    justify-content: center;
    align-items: center;
    display: flex;
    padding-bottom: 80px;
   
`

export const MainCol = styled(Col)`
`

export const Title = styled(Container)`
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 600;
    padding-top: 80px;
    font-size: 28px;
    margin: 0 0 8px;
    @media (max-width: 768px){
        font-size: 20px;
        
    }
`

export const CustomCollapsed = styled(Collapse)`
    background-color: transparent;
    margin-top: 40px;
    & > img{
        width: 30px;
        height: 30px;
    }
    
`
export const Text = styled.p`
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 20px;
    padding-bottom: 25px;
    line-height: 1.5;
    padding: 1rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    width: 500px;
    @media (max-width: 768px) {
        width: 300px;   
    }
`
export const MenuOpener = styled(Plus)`
    height: 30px;
    width: 30px;
    color: black;
`