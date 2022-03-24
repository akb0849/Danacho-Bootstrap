import styled from 'styled-components'
import {Container} from 'react-bootstrap'
import { Collapse } from "antd";
import {Plus} from '@styled-icons/boxicons-regular/Plus'



export const Wrapper = styled(Container)`
    width: 100vw;
    background-color: #FBEDB1;
   
    @media (max-width: 768px){
        
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
    padding-left: 40vw;
    @media (max-width: 760px) {
        padding-left: 0;
    }
    @media (min-width: 768px ) and (max-width: 900px){
        padding-left: 20vw;;
    }
    @media (min-width: 1024px){
        padding-left: 35vw;
    }

    @media  (min-width: 2560px){
        padding-left: 40vw;
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