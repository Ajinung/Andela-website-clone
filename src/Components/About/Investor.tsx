import React from "react";
import styled from "styled-components";
import img from "../Asset/Image-iOS.png";

const Investor = () => {
  return (
    <Container>
      <Right>
        <h1>Our Investors</h1>
        <p>We are grateful to be backed by some of the best in the world.</p>
      </Right>
      <Left>
        <img src={img} alt="" />
      </Left>
    </Container>
  );
};

export default Investor;

const Container = styled.div`
  width: 90%;
  height: 65vh;
  margin: auto;
  margin-top: 90px;
  display: flex;
`;

const Right = styled.div`
  width: 35%;
  height: 100%;
  margin-right: 210px;
  margin-left: 25px;

  h1 {
    margin: 0;
    font-size: 3rem;
    font-family: serif;
    font-weight: 100;
    opacity: 0.9;
  }
  p {
    width: 28vw;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    opacity: 0.9;
  }
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  img {
    height: 80%;
  }
`;
