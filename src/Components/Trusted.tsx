import React from "react";
import styled from "styled-components";
import git from "./Asset/github.svg";
import inv from "./Asset/invision.svg";
import cour from "./Asset/coursera.svg";
import kraf from "./Asset/Kraft-Heinz.svg";
import seis from "./Asset/seismic.svg";
import gold from "./Asset/goldman.svg";

const Trusted = () => {
  return (
    <Container>
      <Top>
        <h1>Trusted by</h1>
      </Top>
      <Bottom>
        <img src={git} alt="" />
        <img src={inv} alt="" />
        <img src={cour} alt="" />
        <img src={kraf} alt="" />
        <img src={seis} alt="" />
        <img src={gold} alt="" />
      </Bottom>
    </Container>
  );
};

export default Trusted;

const Container = styled.div`
  background-color: #e0f1eb;
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Top = styled.div`
  margin-top: 50px;
  h1 {
    margin: 0;
    font-weight: 100;
  }
  /* background-color: #e0f1eb;
  width: 100%;
  height: 30vh; */
`;
const Bottom = styled.div`
  margin-top: 40px;

  width: 80%;
  height: 10vh;
  display: flex;
  justify-content: space-between;

  img {
    height: 28px;
    width: 120px;
  }
  /* background-color: #e0f1eb;
  width: 100%;
  height: 30vh; */
`;
