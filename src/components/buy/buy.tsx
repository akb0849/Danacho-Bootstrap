import React from 'react'
import ConnectWallet from '../../subComponents/modal/modal'
import BuyInfo from '../buyInfo/buyInfo'
import { ConnectWalletButton, InputCol, InputContainer, InputField, InputRow, InputTitle, MainCol, MainContainer, MainRow, Title, Wrapper } from './buyElements'

const Buy = () => {
  return (
    <Wrapper>
        <MainContainer>
           <MainRow>
             <MainCol>
              <Title>Buy Danacho (NAC)</Title>
              <InputRow>
                <InputCol>
                    <InputContainer>
                      <InputTitle>Enter ETH</InputTitle>
                      <InputField />
                  </InputContainer>
                  <ConnectWalletButton><ConnectWallet /></ConnectWalletButton>
                </InputCol>
              </InputRow>
             </MainCol>
           </MainRow>
        </MainContainer>
    </Wrapper>
  )
}

export default Buy