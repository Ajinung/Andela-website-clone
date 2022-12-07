import React from "react";
import styled from "styled-components";

const Transform = () => {
  return (
    <Container>
      <Top>
        <h1>
          <i>Transforming lives</i> through technology
        </h1>
      </Top>
      <Bottom>
        <Box></Box>
      </Bottom>
    </Container>
  );
};

export default Transform;

const Container = styled.div`
  width: 100%;
  background-color: #173b3f;
  margin-top: 60px;
  margin-bottom: 100px;
`;

const Top = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 50px;
    /* margin: 0; */
    font-family: serif;
    font-size: 45px;
    line-height: 48px;
    font-weight: 100;
    color: #fff;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Box = styled.div`
  width: 40vw;
  height: 43vh;
  background-color: #fff;
  margin-bottom: 30px;
`;
