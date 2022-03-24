import styled from 'styled-components'
import {UpArrowAlt} from '@styled-icons/boxicons-regular/UpArrowAlt'
export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: orange;
    width: 50px;
    height: 50px;
    margin-left: 370px;
    border-radius: 15px;
    @media (max-width: 768px){
        margin-left: calc(100% - 60px);        
    }
`

export const Icon = styled(UpArrowAlt)`
    width: 30px;
    height: 30px;
    color: black
`