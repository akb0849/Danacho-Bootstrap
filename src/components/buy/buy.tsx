import React from 'react'
import ConnectWallet from '../../subComponents/modal/modal'
import { ConnectWalletButton, InputContainer, InputField, InputTitle, MainContainer, Title, Wrapper } from './buyElements'

const Buy = () => {
  return (
    <Wrapper>
        <MainContainer>
            <Title>Buy Danacho (NAC)</Title>
            <InputContainer>
                <InputTitle>Enter ETH</InputTitle>
                <InputField />
            </InputContainer>
            <ConnectWalletButton><ConnectWallet /></ConnectWalletButton>
        </MainContainer>
    </Wrapper>
  )
}

export default Buy