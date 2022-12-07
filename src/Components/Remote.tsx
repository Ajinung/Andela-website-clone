import React from "react";
import styled from "styled-components";
import hero from "./Asset/ron.jpg";
import GlobalButton from "./GlobalButton";

const Remote = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <h1>
            Build a <i>brilliant</i> remote team quickly
          </h1>
          <h3>
            We specialize in helping our highly-skilled, global technology
            talent community connect with hundreds of leading companies.
          </h3>
          <BtnHold>
            <GlobalButton
              bg="#56c870"
              text="Build your dream team"
              pad="24px 40px"
              col="#000"
              rad="50px"
              bd=""
            />
          </BtnHold>
          <p>Get the Enterprise Advantage {">"}</p>
        </Right>
        <Left>
          <NumbText>
            <NumLine>
              <Num>1</Num>
              <Line></Line>
            </NumLine>
            <Message>
              <h3>Smart skill matching</h3>
              <p>
                Our intuitive machine learning and AI platform finds you the
                best match for any role.
              </p>
            </Message>
          </NumbText>
          <NumbText>
            <NumLine>
              <Num>2</Num>
              <Line></Line>
            </NumLine>
            <Message>
              <h3>Meet the best talent</h3>
              <p>
                Easily schedule interviews and meet top technologists that fit
                within your team.
              </p>
            </Message>
          </NumbText>
          <NumbText>
            <NumLine1>
              <Num>3</Num>
            </NumLine1>
            <Message>
              <h3>Continued excellence</h3>
              <p>
                Integrate your new team members quickly and effectively. Let us
                manage payroll and compliance.
              </p>
            </Message>
          </NumbText>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default Remote;

const NumLine = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const NumLine1 = styled.div`
  height: 100%;
  /* display: flex;
  align-items: center;
  flex-direction: column; */
  /* background-color: green; */
`;
const Line = styled.div`
  width: 2px;
  height: 10vh;
  background-color: white;
`;
const NumbText = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
`;
const Num = styled.div`
  width: 5vw;
  height: 10vh;
  border-radius: 50px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 25px;
  color: white;
`;
const Message = styled.div`
  height: 100%;
  margin-left: 30px;
  color: #fff;
  font-family: sans-serif;

  p {
    width: 28vw;
    font-size: 18px;
    line-height: 1.5rem;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";
    width: 100%;
    height: 80vh;
    background-color: rgba(3%, 16%, 16%, 0.8);
    position: absolute;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;
const Right = styled.div`
  width: 40%;
  margin-right: 160px;
  /* background-color: red; */
  /* height: 50%; */

  position: relative;

  h1 {
    font-size: 3rem;
    font-weight: 100;
    color: #fff;
    margin: 0;
  }
  h3 {
    font-size: 18px;
    font-weight: 100;
    font-family: sans-serif;
    margin-top: 30px;
    color: #fff;
    width: 35vw;
    line-height: 1.8rem;
  }
  p {
    font-size: 18px;
    font-weight: 100;
    font-family: sans-serif;
    margin-top: 15px;
    color: #fff;
  }
`;
const BtnHold = styled.div`
  width: 20vw;
`;
const Left = styled.div`
  width: 40%;
  position: relative;
`;
