import styled from 'styled-components'
import {Container,Row,Col} from 'react-bootstrap';

export const Wrapper = styled(Container)`
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
`

export const MainRow = styled(Row)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 3rem!important;
    padding-bottom: 3rem!important;
`

export const MainCol = styled(Col)`
    margin-left: 1.5rem!important;
    margin-right: 1rem!important;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media (min-width: 1400px){
        flex: 0 0 auto;
        width: 41.66666667%;
    }
@media (min-width: 1200px){
        flex: 0 0 auto;
        width: 50%;
    }
@media (min-width: 992px){
        flex: 0 0 auto;
        width: 66.66666667%;
    }
@media (min-width: 768px) {
        flex: 0 0 auto;
        width: 66.66666667%;
    }
`

export const Title = styled.h3`
    text-align: center;
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    @media (min-width: 1200px){
        font-size: 1.75rem; 
    }
`

export const Description = styled.p`
    margin-top: 1rem!important;
    font-size: 18px;
    width: 500px;
    
    @media (min-width: 992px) {
        margin-top: 1rem!important;
    }

    @media (max-width: 786px){
        width: 100%;
    }
    
`