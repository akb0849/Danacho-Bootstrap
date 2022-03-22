import React from 'react'
import { MainContainer, Subtitle, Title, Wrapper,TimerCol,TimerContainer,TimerRow,TimerTitle,TimerValue,TimerWrapper } from './homeElements'

const Home = () => {
  return (
    <Wrapper>
        <MainContainer>
          <Title>Welcome to Danacho</Title>
          <Subtitle>Presale Start Time</Subtitle>
          <TimerWrapper>
            <TimerRow>
              <TimerContainer>
                <TimerValue>0</TimerValue>
                <TimerTitle>days</TimerTitle>
              </TimerContainer>
              <TimerContainer>
                <TimerValue>0</TimerValue>
                <TimerTitle>hours</TimerTitle>
              </TimerContainer>
            </TimerRow>
            <TimerCol>
              <TimerContainer>
                <TimerValue>0</TimerValue>
                <TimerTitle>minutes</TimerTitle>
              </TimerContainer>
              <TimerContainer>
                <TimerValue>0</TimerValue>
                <TimerTitle>seconds</TimerTitle>
              </TimerContainer>
            </TimerCol>
          </TimerWrapper>
          <Subtitle>Presale End Time</Subtitle>
          <TimerWrapper>
            <TimerRow>
              <TimerContainer>
                <TimerValue>0</TimerValue>
                <TimerTitle>days</TimerTitle>
              </TimerContainer>
              <TimerContainer>
                <TimerValue>0</TimerValue>
                <TimerTitle>hours</TimerTitle>
              </TimerContainer>
            </TimerRow>
            <TimerCol>
              <TimerContainer>
                <TimerValue>0</TimerValue>
                <TimerTitle>minutes</TimerTitle>
              </TimerContainer>
              <TimerContainer>
                <TimerValue>0</TimerValue>
                <TimerTitle>seconds</TimerTitle>
              </TimerContainer>
            </TimerCol>
          </TimerWrapper>
        </MainContainer>
    </Wrapper>
  )
}

export default Home