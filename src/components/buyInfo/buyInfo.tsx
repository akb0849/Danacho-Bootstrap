import React from 'react'
import { InfoContainer, InfoDescription, InfoTitle, InfoWrapper, MainContainer, Wrapper } from './buyInfoElements'

const BuyInfo = () => {
  return (
    <Wrapper>
        <MainContainer>
          <InfoWrapper>
            <InfoContainer>
              <InfoTitle>How to Use Danacho</InfoTitle>
              <InfoDescription>To use Danacho, the first thing you are going to need is a wallet. Visit our FAQ page and get the right wallet for you. These wallets are available for a variety of platforms and contain everything you need to use Danacho immediately.</InfoDescription>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>Get Some Coins</InfoTitle>
              <InfoDescription>After you install a wallet, you need to get some Danacho. There are multiple ways to acquire some tokens to spend, but the easiest way is to use an exchange and convert your fiat money into ETH. Many exchanges, centralized and decentralized, list Danacho (NAC).</InfoDescription>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>It's a Currency: Use It!</InfoTitle>
              <InfoDescription>It's a Currency: Use It! Danacho is a currency and can be exchanged for goods, services and other currencies, privately and with very low fees. Many entities will gladly accept NAC for payments; take a look at our 'Merchants' page.</InfoDescription>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>Find Answers to Your Questions</InfoTitle>
              <InfoDescription>We've heard a lot of questions and have compiled a thorough and varied FAQ. Don't worry, if your questions are not in there, you can always ask to reach out via Contact Us and we'll be happy to help!</InfoDescription>
            </InfoContainer>
          </InfoWrapper>
        </MainContainer>
    </Wrapper>
  )
}

export default BuyInfo

