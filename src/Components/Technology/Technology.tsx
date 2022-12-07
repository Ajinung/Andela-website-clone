import React from "react";
import styled from "styled-components";
import Insight from "../Insight";
import Remote from "../Remote";
import Skill from "../Skill";
import BordersTech from "./BordersTech";
import Coder from "./Coder";
import Commitment from "./Commitment";

import CommunityTech from "./CommunityTech";
import DemandTech from "./DemandTech";
import Find from "./Find";
import Hero from "./Hero";

const Technology = () => {
  return (
    <Container>
      <Hero />

      <CommunityTech />
      <Find />
      <Remote />
      <Skill />
      <BordersTech />
      <Commitment />
      <Insight />
      <Coder />
    </Container>
  );
};

export default Technology;

const Container = styled.div`
  font-family: serif;
`;
