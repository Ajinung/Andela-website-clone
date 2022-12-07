import React from "react";
import styled from "styled-components";
import bg from "../Asset/smiling-african-woman.jpg";
import GlobalButton from "../GlobalButton";

const Market = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Join our global marketplace today</h1>
        <BtnHold>
          <GlobalButton
            text="Find work"
            pad="24px 40px"
            bg="#fff"
            rad="50px"
            col="#132128"
            bd=""
          />
          <GlobalButton
            text="Discover Talent"
            pad="24px 40px"
            bg="#56C870"
            rad="50px"
            col="#132128"
            bd=""
          />
        </BtnHold>
      </Wrapper>
    </Container>
  );
};

export default Market;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  transition: all 0.3s;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #173b3fc0;
    position: absolute;
  }

  h1 {
    color: #fff;
    font-family: serif;
    font-size: 3rem;
    font-weight: 100;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const BtnHold = styled.div`
  display: flex;
  /* position: relative; */
`;
