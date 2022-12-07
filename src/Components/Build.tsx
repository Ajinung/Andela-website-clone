import React from "react";
import styled from "styled-components";
import GlobalButton from "./GlobalButton";
import tick from "./Asset/tick-green.svg";

interface buildProp {
  img: string;
  caption: string;
  title: string;
  text: string;
  flex: string;
  titleWd: string;
  rightWd: string;
  display: string;
  disp: string;
  margin: string;
}

const Build: React.FC<buildProp> = ({
  img,
  caption,
  title,
  text,
  flex,
  titleWd,
  rightWd,
  display,
  disp,
  margin,
}) => {
  return (
    <Container flex={flex}>
      <Right rightWd={rightWd} margin={margin}>
        <img src={img} alt="" />
      </Right>
      <Left titleWd={titleWd}>
        <Capt>
          <h5>{caption}</h5>
        </Capt>
        <Title>
          <h1>{title}</h1>
        </Title>
        <Message>
          <p>{text}</p>
          <ImgTxt display={display}>
            <Img>
              <img src={tick} alt="" />
            </Img>
            <p>Long-term placements</p>
          </ImgTxt>
          <ImgTxt display={display}>
            <Img>
              <img src={tick} alt="" />
            </Img>
            <p>Trusted career partner</p>
          </ImgTxt>
          <ImgTxt display={display}>
            <Img>
              <img src={tick} alt="" />
            </Img>
            <p>Career Guidance</p>
          </ImgTxt>
          <ImgTxt display={display}>
            <Img>
              <img src={tick} alt="" />
            </Img>
            <p>96% match success</p>
          </ImgTxt>
        </Message>
        <Button disp={disp}>
          <GlobalButton
            text="Build your team"
            col="#000"
            bg="#56C870"
            bd=""
            rad="50px"
            pad="24px 40px"
          />
        </Button>
      </Left>
    </Container>
  );
};

export default Build;

const Container = styled.div<{ flex: string }>`
  /* height: 70vh; */
  width: 90%;
  margin: auto;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: ${(props) => (props.flex ? "row" : "row-reverse")};
  margin-top: 70px;
  margin-bottom: 100px;
  flex-wrap: wrap;
`;
const Right = styled.div<{ rightWd: string; margin: string }>`
  width: ${(props) => props.rightWd};
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-right: ${(props) => props.margin};

  img {
    width: 100%;
  }
`;
const Left = styled.div<{ titleWd: string }>`
  width: ${(props) => props.titleWd};
  padding: 10px 20px;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
  /* background-color: rebeccapurple; */
`;
const Capt = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-family: sans-serif;

  h5 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.9;
  }
`;
const Title = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  font-family: serif;
  color: #132128;
  /* background-color: rebeccapurple; */

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 2.8rem;
    /* line-height: 2.5rem; */
  }
`;
const Message = styled.div`
  width: 100%;
  font-family: Segoe UI;
  margin-bottom: 10px;
  font-weight: 600;
  /* height: 40vh; */

  p {
    font-size: 19px;
    line-height: 28px;
    font-weight: lighter;
    opacity: 0.8;
  }
`;
const Button = styled.div<{ disp: string }>`
  width: 100%;
  display: flex;
  margin-top: 20px;
  display: ${(props) => props.disp};
`;
const ImgTxt = styled.div<{ display: string }>`
  display: ${(props) => props.display};
  align-items: center;
  height: 5vh;
  width: 100%;

  p {
    margin-top: 13px;
  }
`;
const Img = styled.div`
  margin-right: 10px;
`;
