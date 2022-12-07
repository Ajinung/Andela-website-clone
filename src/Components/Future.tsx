import React from "react";
import styled from "styled-components";
import GlobalButton from "./GlobalButton";

const Future = () => {
  return (
    <Container>
      <First>
        <h1>Welcome to the future of meaningful, sustainable work</h1>
      </First>
      <Second>
        <p>
          We believe that the sum is greater than our parts – our impact can be
          seen globally. We specialize in helping our highly-skilled, global
          technology talent community in emerging markets, connect with hundreds
          of leading companies
        </p>
      </Second>
      <Third>
        <Box>
          <h1>110+</h1>
          <p>
            Countries represented on <br /> 6 continents
          </p>
        </Box>
        <Box>
          <h1>96%</h1>
          <p>Successful placements</p>
        </Box>
        <Box>
          <h1>85%</h1>
          <p>Increased income for Andelans</p>
        </Box>
        <Box>
          <h1>175,000+</h1>
          <p>Technologists represented</p>
        </Box>
        <Box>
          <h1>18+</h1>
          <p>
            Months <br /> Average engagement{" "}
          </p>
        </Box>
      </Third>
      <Btn>
        <GlobalButton
          col="#132128"
          bg=""
          bd="1px solid #132128;"
          text="Apply for Remote Jobs"
          pad="24px 40px"
          rad="50px"
        />
        <GlobalButton
          col="#132128"
          bg="#56C870"
          bd=""
          text="Hire a Talent"
          pad="24px 40px"
          rad="50px"
        />
      </Btn>
    </Container>
  );
};

export default Future;

const Container = styled.div`
  width: 100%;
  /* height: 80vh; */
  margin-top: 40px; ;
`;
const First = styled.div`
  width: 40vw;
  margin: auto;
  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 3rem;
    text-align: center;
    opacity: 0.9;
  }
`;
const Second = styled.div`
  width: 80%;
  margin: auto;
  font-family: sans-serif;
  font-size: 18px;
  margin-top: 30px;

  p {
    text-align: center;
    opacity: 0.9;
    font-weight: lighter;
    color: #132128;
    line-height: 28px;
  }
`;
const Third = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;
const Box = styled.div`
  width: 405px;
  height: 280px;
  background-color: #b0d6ce;
  color: #132128;
  font-size: 18px;
  line-height: 28px;
  border-radius: 20px;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: "Inter", sans-serif;
    margin: 0;
    font-size: 3rem;
    font-weight: 100;
  }
  p {
    margin-top: 20px;
    font-size: 22px;
    text-align: center;
    font-style: oblique;
  }
`;
const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;
