import React from 'react'
import { Wrapper,BottomContainer,BottomField,BottomFieldContainer,Footer,LeftContainer,MainContainer,RightContainer,TopContainer,TopField,TopFieldContainer, Title, SendButton} from './contactElements'
import LogoImage from '../../assets/logo1.png'
import ScrollToTop from '../../subComponents/scrollToTop/scrollToTop'
const Contact = () => {
  return (
    <Wrapper>
      <MainContainer>
        <TopContainer>
          <LeftContainer>
            <img src={LogoImage} alt="" />
          </LeftContainer>
          <RightContainer>
            <Title>Contact us</Title>
            <TopFieldContainer>
              <TopField placeholder='Your Name'/>
              <TopField placeholder='Your Email'/>
            </TopFieldContainer>
            <BottomFieldContainer>
              <BottomField placeholder='Message'/>
            </BottomFieldContainer>
            <SendButton>Send</SendButton>
            <ScrollToTop />
          </RightContainer>
        </TopContainer>
        <BottomContainer>
          <Footer>© 2022 All Rights Reserved Powered</Footer>
        </BottomContainer>
      </MainContainer>
    </Wrapper>
  )
}

export default Contact

