import React from "react";
import styled from "styled-components";

const Commitment = () => {
  return (
    <Container>
      <Left>
        <h1>
          Our commitment to <br /> your success
        </h1>
      </Left>
      <Right>
        <TextHold>
          <h1>Technologist first culture</h1>
          <p>
            Ensuring a seamless experience for technologists is our top
            priority. You can rest assured there is always someone looking out
            for your interests and career.
          </p>
        </TextHold>
        <TextHold>
          <h1>Trusted platform</h1>
          <p>
            We only work with trusted and vetted companies. No matter what,
            we’ll ensure you are paid for the work you do, and on time.
          </p>
        </TextHold>
        <TextHold>
          <h1>Global support</h1>
          <p>
            Wherever you are, and whatever issues you may face, we’re here to
            help solve any disputes, fast!
          </p>
        </TextHold>
      </Right>
    </Container>
  );
};

export default Commitment;

const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const Left = styled.div`
  margin-left: 25px;
  font-size: 20px;
  font-weight: 500;
  /* margin: 0; */

  h1 {
    font-weight: 100;
    font-size: 3rem;
    color: #1a1a1a;
  }
`;
const Right = styled.div`
  width: 50%;
  h1 {
    margin-bottom: 15px;
    font-weight: 500;
    color: #1a1a1a;
  }
  p {
    color: #1a1a1a;
    width: 90%;
    font-size: 18px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
const TextHold = styled.div``;
