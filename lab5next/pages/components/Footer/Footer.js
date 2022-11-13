import React from "react";
//import styled components
import { Wrapper, Content, CocktaildbLogo } from "./Footer.styles";
//import logo
import logo from "./thecocktaildb.png";
//this component is for the footer at the bottom of the page
const Footer = () => {
  return (
    <Wrapper>
      <Content>
        Powered By <p style={{ color: "white", margin: 0, marginLeft: 10, fontFamily: "sans-serif" }}>Tony</p>
      </Content>
    </Wrapper>
  );
};

export default Footer;
