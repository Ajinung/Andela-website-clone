import React from "react";
import Achieved from "./Achieved";
import BriliantMind from "./BriliantMind";
import Empower from "./Empower";
import Hero from "./Hero";
import Investor from "./Investor";
import Transform from "./Transform";
import styled from "styled-components";
import Market from "./Market";

const About = () => {
  return (
    <Container>
      <Hero />
      <Empower />
      <BriliantMind />
      <Investor />
      <Transform />
      <Achieved />
      <Market />
    </Container>
  );
};

export default About;

const Container = styled.div`
  color: #132128;
`;
