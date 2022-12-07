import React from "react";
import styled from "styled-components";

import Brilliant from "../Brilliant";
import Remote from "../Remote";
import Btalents from "./Btalents";
import Elevate from "./Elevate";
import Experts from "./Experts";
import Hero from "./Hero";
import Scale from "./Scale";
import Trusted from "./Trusted";
import Value from "./Value";
import Winning from "./Winning";

const Enterprise = () => {
  return (
    <Container>
      <Hero />
      <Trusted />
      <Winning />
      <Value />
      <Remote />
      <Experts />
      <Elevate />
      <Brilliant />
      <Btalents />
      <Scale />
    </Container>
  );
};

export default Enterprise;

const Container = styled.div`
  h1 {
    font-family: serif;
  }
`;
