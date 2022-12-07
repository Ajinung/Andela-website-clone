import React from "react";
import styled from "styled-components";
import GlobalButton from "../GlobalButton";
import Image from "../Asset/faces.jpg";

const BordersTech = () => {
  return (
    <Container>
      <Wrapper>
        <h1>
          Grow your <i> potential</i> beyond borders
        </h1>
        <p>
          Connect with a global network and land international opportunities.
        </p>

        <ButtonHold>
          <GlobalButton
            text=" Discover Opportunities"
            bd=""
            bg="#56C870"
            col="##173B3F"
            pad="24px 40px"
            rad="50px"
          />
        </ButtonHold>
      </Wrapper>
    </Container>
  );
};

export default BordersTech;
const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  height: 560px;
  width: 100%;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;

  ::before {
    content: "";
    height: 100%;
    width: 100%;
    background-color: rgba(3%, 15%, 15%, 0.8);
    position: absolute;
  }

  h1 {
    margin: 0;
    font-size: 50px;
    color: white;
    margin-left: 23px;
    margin-top: 190px;
    font-weight: lighter;
    z-index: 2;
  }
  p {
    color: white;
    margin-left: 23px;
    font-size: 19px;
    z-index: 2;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const ButtonHold = styled.div`
  width: 19vw;
`;
