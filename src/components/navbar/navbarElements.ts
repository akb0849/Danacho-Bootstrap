import styled from "styled-components";
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import { Twitter } from "styled-icons/boxicons-logos";
import {Anchor, Container, Navbar, NavLink} from 'react-bootstrap'
import {Image} from 'antd';
interface Props{
    isOpen: any
}

export const Wrapper = styled(Container)`
  background: hsla(0,0%,92.9%,.8627450980392157);
`
export const MenuLink = styled(Anchor)`
  padding-right: 20px;
  //width: 250px;
  padding-left: 0;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  display: flex;
  transition: all 0.3s ease-in;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 768px){
    margin-top: 2px;
    margin-left: 5px;
  }
`;

export const Nav = styled(Navbar)`

  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: relative;
  
  top: 0;
  left: 0;
  right: 0;
  background-color: #DBE4E6;
  width: 100%;

  @media (min-width:992px){
    justify-content: space-evenly;
  }
  
`

export const Logo = styled(Image)`
  //padding: 1rem 0;
  height: 50px;
  width: 50px;
  //padding-left: 50px;
  @media(max-width: 760px){
  }
`

export const Menu = styled(Container)<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    background-color: inherit;
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled(Container)`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const SocialMediaContainer = styled(Container)<Props>`   
  display: flex;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; 
    //height: 100%;
    transition: display 0.3s ease-in;
    //width: 95%;
    align-items: center;
    justify-content: center;  
    padding-top: 5px;
    background-color: inherit;
    width: 100vw;
  }
  @media (min-width: 1440px) {
    width: 100px;    
  }
`

export const SocialMediaIcon = styled.a`
  background-color: #399ED9;
  width: 32px;
  height: 28px;
  margin: 0 4px 0 0;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const InstaIcon = styled(Instagram)`
  width: 28px;
  height: 28px;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  ;
`

export const TwitterIcon = styled(Twitter)`
  color: white;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`