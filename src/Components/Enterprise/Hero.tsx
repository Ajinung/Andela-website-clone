import React from "react";
import styled from "styled-components";
import GlobalButton from "../GlobalButton";
import pic from "../Asset/enterprise.jpg";

const Hero = () => {
  return (
    <Container>
      {/* <Header /> */}
      <Wrapper>
        <Message>
          <h1>
            We’re here to help you build a <i>world class team,</i> today.
          </h1>
          <p>
            Trusted by enterprise teams and growing startups alike, Andela’s
            onboarding times are 70% faster than the industry average.
          </p>
          <ButtonHold>
            <GlobalButton
              text="Schedule a Call"
              bd=""
              bg="#fff"
              col="##173B3F"
              pad="24px 40px"
              rad="50px"
            />
            <GlobalButton
              text="Watch an Overview"
              bd=""
              bg="#56C870"
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

  h1 {
    font-family: serif;
    font-size: 4.5rem;
    font-weight: 100;
    width: 50vw;
    margin: 0;
    line-height: 4.5rem;
    color: white;
    /* text-transform: ; */
  }
  p {
    width: 28vw;
    color: #fff;
    font-weight: 100;
    font-size: 20px;
    margin-top: 40px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
const ButtonHold = styled.div`
  display: flex;
  margin-top: 40px;
`;
