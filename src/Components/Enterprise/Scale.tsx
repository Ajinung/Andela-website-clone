import React from "react";
import styled from "styled-components";
import Build from "../Build";
import scale from "../Asset/scale.png";

const Scale = () => {
  return (
    <Container>
      <Wrapper>
        <Build
          img={scale}
          title="Scaling your team globally has never been this easy"
          caption=""
          text="Skilled engineers, product managers, and designers at your fingertips. An extensive list of technical services to suit your business needs. Cost-effective option for world-class expertise."
          flex="f"
          rightWd="40%"
          titleWd="50%"
          disp=""
          display="none"
          margin="90px"
        />
      </Wrapper>
    </Container>
  );
};

export default Scale;

const Container = styled.div`
  width: 100%;
  /* height: 80vh; */
  background-color: #b0d6ce;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 80vh;
  margin-top: 50px;
  margin: auto;
  display: flex;
  align-items: center;
`;
