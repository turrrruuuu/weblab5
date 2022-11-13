import React from "react";
//import styled components
import { Wrapper, Content, ReactLogo } from "./Nav.styles";
//import react logo
import logo from "./logo.png";
//this component is for top nav
const Nav = () => {
  return (
    <Wrapper>
      <Content>
        <ReactLogo src={logo} /> Метууш (Метаверс коктейлны газар)
      </Content>
    </Wrapper>
  );
};

export default Nav;
