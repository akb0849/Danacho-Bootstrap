import React, { useState } from "react";
import { Hamburger, InstaIcon, Logo, Menu, MenuLink, Nav, SocialMediaContainer, SocialMediaIcon, TwitterIcon, Wrapper } from "./navbarElements";
import LogoImage from '../../assets/logo1.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Nav>
        <Logo src={LogoImage} />
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink href="">Buy</MenuLink>
          <MenuLink href="">About</MenuLink>
          <MenuLink href="">FAQ</MenuLink>
          <MenuLink href="">Contact</MenuLink>
        </Menu>
        <SocialMediaContainer isOpen={isOpen}>
          <SocialMediaIcon href="https://twitter.com/Danacho14">
            <TwitterIcon/>
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.instagram.com/_danacho/">
            <InstaIcon />
          </SocialMediaIcon>
        </SocialMediaContainer>
      </Nav>
    </Wrapper>
  );
};

export default Navbar
