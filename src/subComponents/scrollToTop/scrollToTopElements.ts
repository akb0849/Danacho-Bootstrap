import styled from 'styled-components'
import {UpArrowAlt} from '@styled-icons/boxicons-regular/UpArrowAlt'
import {Container} from 'react-bootstrap'
export const Button = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: orange;
    width: 40px;
    height: 40px;
    margin-left: 360px;
    border-radius: 15px;

    @media (max-width: 768px){
        margin-left: calc(100% - 70px);        
    }
`

export const Icon = styled(UpArrowAlt)`
    width: 30px;
    height: 30px;
    color: black
`