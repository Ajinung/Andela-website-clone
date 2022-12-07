import React from "react";
import styled from "styled-components";
import pic from "../Asset/about-banner.jpg";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Message>
          <h1>
            Our mission is to connect <i>brilliance</i> with opportunity
          </h1>
          <p>Irrespective of race, gender, and geography.</p>
        </Message>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${pic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  background-attachment: fixed;
  transition: all 0.3s;

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #00000084;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
  margin-top: 200px;
`;
const Message = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* margin-left: 150px; */
  h1 {
    font-size: 4.5rem;
    font-weight: 100;
    width: 35vw;
    margin: 0;
    line-height: 4.5rem;
    color: white;
    font-family: "Inria Serif", serif;
    /* text-transform: ; */
  }
  p {
    color: #fff;
    font-weight: 100;
    font-size: 18px;
    margin-top: 40px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
