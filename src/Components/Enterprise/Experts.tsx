import React from "react";
import styled from "styled-components";
import img from "../Asset/section7.png";
import GlobalButton from "../GlobalButton";

const Experts = () => {
  return (
    <Container>
      <Top>
        <h1>
          <i>Experts</i> from around the world
        </h1>

        <p>
          With flexibility in mind, we’ve built our matching process to easily
          scale up or down based on your team’s changing needs.
        </p>
      </Top>
      <Bottom>
        <Right>
          <img src={img} alt="" />
        </Right>
        <Left>
          <TextHold>
            <h1>Hire Individuals</h1>
            <p>
              Find the right technologist to complement your existing team and
              hit the ground running on impactful initiatives.
            </p>
          </TextHold>
          <TextHold>
            <h1>Build Teams</h1>
            <p>
              Scale rapidly with a full team of technologists embedded at your
              company to unlock more growth and potential.
            </p>
            <BtnnHold>
              <GlobalButton
                text="Discover Talent"
                col="#132128"
                bg="#56C870"
                bd=""
                rad="50px"
                pad="24px 40px"
              />
            </BtnnHold>
          </TextHold>
        </Left>
      </Bottom>
    </Container>
  );
};

export default Experts;

const BtnnHold = styled.div`
  width: 15vw;
  margin-top: 40px;
`;

const Container = styled.div`
  width: 90%;
  margin: auto;
  /* height: 90vh; */
  margin-top: 100px;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2.7rem;
    font-weight: 100;
  }
  p {
    margin: 0;
    font-size: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    width: 43vw;
    text-align: center;
    opacity: 0.9;
  }
`;
const Bottom = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  display: flex;
  margin-bottom: 70px;
`;
const Right = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;

  img {
    width: 80%;
    height: 100%;
    object-fit: contain;
  }
`;
const Left = styled.div`
  width: 40%;
`;
const TextHold = styled.div`
  color: #132128;
  margin-bottom: 40px;
  h1 {
    font-size: 2.5rem;
    font-weight: 100;
    opacity: 0.9;
  }
  p {
    margin: 0;
    font-size: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    line-height: 28px;
  }
`;
