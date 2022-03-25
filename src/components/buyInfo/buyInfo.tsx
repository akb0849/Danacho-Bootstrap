import React from 'react'
import { Description, MainCol, MainRow, Title, Wrapper } from './buyInfoElements'

const BuyInfo = () => {
  return (
    <Wrapper>
      <MainRow>
        <MainCol>
            <Title>How to Use Danacho</Title>
            <Description>To use Danacho, the first thing you are going to need is a wallet. Visit our FAQ page and get the right wallet for you. These wallets are available for a variety of platforms and contain everything you need to use Danacho immediately.</Description>

            <Title>Get Some Coins</Title>
            <Description>After you install a wallet, you need to get some Danacho. There are multiple ways to acquire some tokens to spend, but the easiest way is to use an exchange and convert your fiat money into ETH. Many exchanges, centralized and decentralized, list Danacho (NAC).</Description>

            <Title>It's a Currency: Use It!</Title>
            <Description>It's a Currency: Use It! Danacho is a currency and can be exchanged for goods, services and other currencies, privately and with very low fees. Many entities will gladly accept NAC for payments; take a look at our 'Merchants' page.</Description>
        </MainCol>
      </MainRow>
      <MainRow>
        <MainCol>
            <Title>Find Answers to Your Questions</Title>
            <Description>We've heard a lot of questions and have compiled a thorough and varied FAQ. Don't worry, if your questions are not in there, you can always ask to reach out via Contact Us and we'll be happy to help!</Description>
        </MainCol>
      </MainRow>
    </Wrapper>
  )
}

export default BuyInfo