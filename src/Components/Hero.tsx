import React from "react";
import styled from "styled-components";
import pic from "../Components/Asset/ron.jpg";
import GlobalButton from "./GlobalButton";
// import Header from "./Header";

const Hero = () => {
  return (
    <Container>
      {/* <Header /> */}
      <Wrapper>
        <Message>
          <h1>
            Discover <i>brilliant</i> talent around the world
          </h1>
          <p>
            Join Andela to build your team with developers, engineers, product
            designers, and the best remote technology experts.
          </p>
          <ButtonHold>
            <GlobalButton
              text="Hire Talent"
              bd=""
              bg="#56C870"
              col="##173B3F"
              pad="24px 40px"
              rad="50px"
            />
            <GlobalButton
              text="Apply for Jobs"
              bd=""
              bg="#fff"
              col="##173B3F"
              pad="24px 40px"
              rad="50px"
            />
          </ButtonHold>
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
    background-color: rgba(3%, 15%, 15%, 0.8);
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
    width: 50vw;
    margin: 0;
    line-height: 4.5rem;
    color: white;
    /* text-transform: ; */

    @media screen and (max-width: 650px) {
      font-size: 3.2rem;
      width: 70vw;
      line-height: 2.9rem;
    }
  }
  p {
    color: #fff;
    font-weight: 100;
    font-size: 18px;
    margin-top: 40px;
    font-family: sans-serif;
  }
`;
const ButtonHold = styled.div`
  display: flex;
  margin-top: 40px;

  @media screen and (max-width: 650px) {
    display: block;
    width: 37vw;
    /* height: 50vh; */
  }
`;
