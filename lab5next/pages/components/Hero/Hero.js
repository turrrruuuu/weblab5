import React from "react";
//import styled components
import { Wrapper, Content, Heading1 } from "./Hero.styled";
//this component is for the hero image

const Hero = () => {
  return (
    <Wrapper>
      <Content>
        <h1 >
          Тавтай морил <Heading1>Саруулын гайхалтай коктейлны метаверс</Heading1>
        </h1>
        <p>Уух зүйлээ урлагийн түвшинд сонго</p>
        <p>Оройн цагаар ч хүргээд өгнө (2 дахин үнэтэй ххэ)</p>
      </Content>
    </Wrapper>
  );
};

export default Hero;
