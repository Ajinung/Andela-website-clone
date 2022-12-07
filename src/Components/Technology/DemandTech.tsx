import React from "react";
import styled from "styled-components";

const DemandTech = () => {
  return (
    <Container>
      <h3>Your skills are in demand</h3>
      <p>The future is yours to create.</p>
      <Hold>
        <Stacks>Python</Stacks>
        <Stacks>Node.js</Stacks>
        <Stacks>Kotlin</Stacks>
        <Stacks>Flask</Stacks>
        <Stacks>React Native</Stacks>
        <Stacks>Vue.js</Stacks>
        <Stacks>PHP</Stacks>
        <Stacks>Android</Stacks>
        <Stacks>Javascript</Stacks>
        <Stacks>Ruby</Stacks>
        <Stacks>C#</Stacks>
        <Stacks>DevOps</Stacks>
        <Stacks>Golang</Stacks>
        <Stacks>Data Scientiests</Stacks>
        <Stacks>React.js</Stacks>
        <Stacks>Swift</Stacks>
        <Stacks>SalesForce</Stacks>
        <Stacks>Java</Stacks>
        <Stacks>Django</Stacks>
      </Hold>
      <button>Apply to the Andela Talent Network</button>
    </Container>
  );
};

export default DemandTech;

const Container = styled.div`
  width: 100%;
  height: 730px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;

  button {
    width: 390px;
    height: 66px;
    border: 2px solid black;
    margin-top: 75px;
    border-radius: 40px;
    font-size: 19px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      transform: scale(1.1);
      transition: all 350ms;
      cursor: pointer;
    }
  }

  h3 {
    margin-bottom: 15px;
    margin-top: 21px;
    font-weight: lighter;
    font-size: 45px;
  }
  p {
    margin: 0;
    font-size: 20px;
  }
`;

const Hold = styled.div`
  width: 96%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 25px;
`;

const Stacks = styled.div`
  width: 300px;
  height: 54px;
  border-radius: 30px;
  padding-left: 23px;
  background-color: white;
  font-size: 23px;
  display: flex;
  align-items: center;
  :hover {
    transform: scale(1.1);
    transition: all 350ms;
    color: #56c870;
    cursor: pointer;
  }
`;
