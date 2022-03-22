import styled from 'styled-components'
import {Container} from 'react-bootstrap'
import { Collapse } from "antd";
import {Plus} from '@styled-icons/boxicons-regular/Plus'



export const Wrapper = styled(Container)`
    width: 100vw;
    height: 100%;
    background-color: #FBEDB1;
    position: relative;
    @media (max-width: 768px){
        margin-top: 150px;
    }
`
export const Title = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 28px;
    padding-top: 20px;
    @media (max-width: 768px){
        font-size: 20px;
    }
    
`

export const CustomCollapsed = styled(Collapse)`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 40px;
    margin-left: 450px;
    @media (max-width: 768px) {
        margin-left: 0;        
    }
`
export const Text = styled.p`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    font-weight: bold;
    @media (max-width: 768px) {
        width: 300px ;
    }
`
export const MenuOpener = styled(Plus)`
    height: 30px;
    width: 30px;
    color: black;
`