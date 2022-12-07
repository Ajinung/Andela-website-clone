import React from "react";
import styled from "styled-components";

interface card {
  bg: string;
  text: string;
  img: string;
}

const BrilCard: React.FC<card> = ({ bg, text, img }) => {
  return (
    <Container bg={bg}>
      <ImgHold>
        <img src={img} alt="" />
      </ImgHold>
      <p>{text}</p>
    </Container>
  );
};

export default BrilCard;

const Container = styled.div<{ bg: string }>`
  height: 272px;
  width: 255px;
  background-color: ${(props) => props.bg};
  border-radius: 10px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  overflow: hidden;

  p {
    color: #132128d6;
    font-family: sans-serif;
    line-height: 1.5rem;
    font-size: 17px;
    text-align: justify;
    font-weight: 100;
  }
`;
const ImgHold = styled.div`
  width: 100%;
  margin-bottom: 20px;
  img {
    height: 48px;
  }
`;
