/* eslint-disable jsx-a11y/anchor-is-valid */

import { Button } from 'antd';
import React, { useState } from 'react'
import Plus from '../../assets/add.png';
import ArrowDown from '../../assets/upload.png'
import { CustomCollapsed, Text, Title, Wrapper,MainRow,MainCol } from './faqElements'


const {Panel} = CustomCollapsed;
const FAQ = () => {
  const [open,setOpen] = useState(false)
  return (
    <Wrapper>
      <Title>Frequently Asked Questions</Title>
      <MainRow>
        <MainCol>
          <CustomCollapsed accordion ghost expandIconPosition='right' onChange={()=>setOpen(!open)} expandIcon={() => (open ? <img src={Plus} alt="close-info" /> : <img src={Plus} alt="open-info" />)}>
          <Panel header="1. I can't see my funds. Did I just lose all my Danacho?" key="1" >
                <Text>
                  You probably didn't. It's very hard to simply 'lose' your tokens, since they are technically nowhere. Your coins 'live' on the blockchain and are linked to your account through a system of public and private keys secured by cryptography. That's why if you don't see your funds, it's probably because of a technical issue. Take a look at the 'Resources & Help' section at the top of this page for a list of useful resources that will help you identify and fix your problem.
                </Text>
              </Panel>
              <Panel header="2. What is Danacho" key="2">
                <Text>
                Danacho is an ERC-20 token built on the Ethereum blockchain. As a collectible meme token and cryptocurrency, Danacho strives to be a low cost bridge for international transactions.
                </Text>
              </Panel>
              <Panel header="3. Why is Danacho Called 'Danacho'" key="3">
                <Text>
                The origin of the name is derived from a nickname.
                </Text>
              </Panel>
              <Panel header="4. How can I get Danacho?" key="4">
                <Text>
                Above, if you connect a wallet, you can purchase Danacho directly from this website. Some wallets include functionality to easily buy Danacho with fiat or other cryptocurrencies. Also, you can buy Danacho from an exchange or from an individual. Exchanges are the most common way to buy Danacho (Etherfork, Forkdelta, Bitcratic, etc.) You can also directly trade Danacho for national currencies (USD, EUR, GBP, etc) or other cryptocurrencies on many exchanges. Some require KYC (proof of identification); others do not, like decentralized exchanges.
                </Text>
              </Panel>
              <Panel header="5. How does Danacho have value?" key="5">
                <Text>
                Danacho has value because people are willing to buy it. If no one is willing to buy Danacho, then it will not have any value. Danacho???s price increases if demand exceeds supply, and it decreases if supply exceeds demand.
                </Text>
              </Panel>
        </CustomCollapsed>
        </MainCol>
      </MainRow>
    </Wrapper>
  )
}

export default FAQ