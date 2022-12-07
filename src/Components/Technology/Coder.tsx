import React from "react";
import styled from "styled-components";
import Image from "../Asset/coder.jpg";
import GlobalButton from "../GlobalButton";
const Coder = () => {
  return (
    <Container>
      <h1>
        <i>Connecting your brilliance</i> with opportunity
      </h1>

      <Button>
        <GlobalButton
          text="Apply to access exclusive jobs"
          bd=""
          bg="#56C870"
          col="##173B3F"
          pad="24px 40px"
          rad="50px"
        />
      </Button>
    </Container>
  );
};

export default Coder;

const Container = styled.div`
  height: 450px;
  width: 100%;
  background-color: black;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 130px;
  flex-direction: column;
  position: relative;

  ::before {
    content: "";
    height: 100%;
    width: 100%;
    background-color: #2c484b;
    position: absolute;
    opacity: 60%;
  }

  h1 {
    width: 35vw;
    margin: 0;
    font-size: 50px;
    color: white;
    font-weight: lighter;
    z-index: 2;
    text-align: center;
  }
  p {
    color: white;
    margin-left: 23px;
    font-size: 19px;
    z-index: 2;
  }
`;

const Button = styled.div`
  position: relative;
  margin-top: 30px;
`;
const ButtonHold = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-left: 15px;

  :hover {
    transform: scale(1.1);
  }
`;
