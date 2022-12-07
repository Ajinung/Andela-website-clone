import React from "react";
import styled from "styled-components";
import GlobalButton from "./GlobalButton";

const Down = () => {
  return (
    <Container>
      <Wrapper>
        <Message>
          <h1>
            Andela launches new platform to
            <br /> <i>power the future</i> to of customized work
          </h1>
        </Message>
        <Btn>
          <GlobalButton
            text="Find out more"
            bg="#56C870"
            bd=""
            col="#000"
            pad="24px 40px"
            rad="50px"
          ></GlobalButton>
        </Btn>
      </Wrapper>
    </Container>
  );
};

export default Down;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: #173b3f;
  display: flex;
  align-items: center;
`;

const Message = styled.div`
  h1 {
    font-size: 2.5rem;
    margin: 0;
    margin-left: 30px;
    color: #fff;
    /* text-transform: capitalize; */
    font-weight: 300;
  }
`;
const Btn = styled.div`
  /* margin-right: 200px; */
`;
