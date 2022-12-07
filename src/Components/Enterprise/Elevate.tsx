import React from "react";
import styled from "styled-components";
import GlobalButton from "../GlobalButton";
const Elevate = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <h1>
            Elevate your <i>business</i> with in demand skills
          </h1>
          <p>We will help you find the right fit for your business.</p>
          <BtnnHold>
            <GlobalButton
              text="Choose Andela"
              col="#132128"
              bg=""
              bd="1px solid #132128"
              rad="50px"
              pad="24px 40px"
            />
          </BtnnHold>
        </Right>
        <Left>
          <First>
            <Box>
              <p>Python</p>
            </Box>
            <Box>
              <p>React Native</p>
            </Box>
            <Box>
              <p>Javascript</p>
            </Box>
            <Box>
              <p>Golang</p>
            </Box>
          </First>
          <Second>
            {" "}
            <Box>
              <p>Salesforce</p>
            </Box>
            <Box>
              <p>Node.js</p>
            </Box>
            <Box>
              <p>vue.js</p>
            </Box>
            <Box>
              <p>Ruby</p>
            </Box>
          </Second>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default Elevate;
const First = styled.div``;
const Second = styled.div``;

const BtnnHold = styled.div`
  width: 15vw;
  margin-top: 40px;
`;
const Box = styled.div`
  width: 17.2vw;
  height: 2vh;
  background-color: #ffffffeb;
  border-radius: 40px;
  margin: 10px 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  transition: all ease-in 0.1s;
  color: #173b3f;
  font-size: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  /* font-weight: 100; */
  color: #000000da;

  :hover {
    transform: scale(1.05);
    color: #56c870;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: auto;
  height: 60vh;
  margin-top: 100px;
  background-color: #eceff0;
  color: #132128;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
`;
const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;

  h1 {
    font-size: 54px;
    line-height: 60px;
    font-weight: 100;
    width: 30vw;
    margin: 0;
  }
  p {
    /* margin: 0; */
    margin-top: 20px;
    font-size: 20px;
    margin-bottom: 5px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
`;
