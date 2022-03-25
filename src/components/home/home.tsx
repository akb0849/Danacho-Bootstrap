import React from 'react'
import { EndTitle, MainCol, MainContainer, MainRow, Subtitle, TimerCol, TimerRow, TimerText, TimerValue, Title, Wrapper } from './homeElements'

const Home = () => {
  return (
    <Wrapper>
        <MainContainer>
         <MainRow>
           <MainCol>
              <Title>Welcome to Danacho</Title>
              <Subtitle>Presale Start Time</Subtitle>
              <TimerRow>
                <TimerCol>
                    <TimerValue>0</TimerValue>
                    <TimerText>days</TimerText>
                </TimerCol>
                <TimerCol>
                    <TimerValue>0</TimerValue>
                    <TimerText>hours</TimerText>
                </TimerCol>
                <TimerCol>
                    <TimerValue>0</TimerValue>
                    <TimerText>minutes</TimerText>
                </TimerCol>
                <TimerCol>
                    <TimerValue>0</TimerValue>
                    <TimerText>seconds</TimerText>
                </TimerCol>
              </TimerRow>
              <EndTitle>Presale End Time</EndTitle>
              <TimerRow>
                <TimerCol>
                    <TimerValue>0</TimerValue>
                    <TimerText>days</TimerText>
                </TimerCol>
                <TimerCol>
                    <TimerValue>0</TimerValue>
                    <TimerText>hours</TimerText>
                </TimerCol>
                <TimerCol>
                    <TimerValue>0</TimerValue>
                    <TimerText>minutes</TimerText>
                </TimerCol>
                <TimerCol>
                    <TimerValue>0</TimerValue>
                    <TimerText>seconds</TimerText>
                </TimerCol>
              </TimerRow>
           </MainCol>
         </MainRow>
        </MainContainer>
    </Wrapper>
  )
}

export default Home

