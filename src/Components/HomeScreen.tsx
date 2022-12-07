import React from "react";
import Down from "./Down";
import Hero from "./Hero";
import { Global } from "./GlobalFont";
import Trusted from "./Trusted";
import Brilliant from "./Brilliant";
import Build from "./Build";
import BuildTeam from "./BuildTeam";
import Remote from "./Remote";
import Future from "./Future";
import Anytime from "./Anytime";
import Skill from "./Skill";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <Container>
      <Global />
      <Hero />
      <Down />
      <Trusted />
      <BuildTeam />
      <Remote />
      <Brilliant />
      <Future />
      <Anytime />
      <Skill />
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  color: #132128;
`;
