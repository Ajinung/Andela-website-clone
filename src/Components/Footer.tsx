import React from "react";
import styled from "styled-components";
import logo from "./Asset/andela.svg";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <One>
          <img src={logo} alt="" />

          <SocialHold>
            <p>
              <BsFacebook />
            </p>
            <p>
              <BsTwitter />
            </p>
            <p>
              <BsGithub />
            </p>
            <p>
              <BsInstagram />
            </p>
            <p>
              <BsYoutube />
            </p>
            <p>
              <BsLinkedin />
            </p>
          </SocialHold>
        </One>
        <Two>
          <Title>
            <h3>Discover Talent</h3>
          </Title>

          <p>For Companies</p>
          <p>Enterprise</p>
          <p>Case studies</p>
        </Two>
        <Two>
          <Title>
            <h3>Find Work</h3>
          </Title>

          <p> Learning Community </p>
          <p>For Companies</p>
          <p>Enterprise</p>
          <p>Leadership Program</p>
          <p>Resources</p>
        </Two>
        <Two>
          <Title>
            {" "}
            <h3>Andela </h3>
          </Title>

          <p>About us</p>
          <p>Events</p>
          <p>Blog</p>
          <p>Press</p>
          <p>Press Center</p>
          <p>Careers</p>
        </Two>
        <Two>
          <h3> Privacy Policy</h3>
          <p>Terms and Conditions</p>
          <p> Modern Slavery Statement</p>
        </Two>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const SocialHold = styled.div`
  display: flex;
  margin-top: 30px;

  p {
    color: #fff;
    font-size: 1.6rem;
    cursor: pointer;
    margin-right: 15px;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 35vh;
  background-color: #173b3f;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const One = styled.div`
  margin-right: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 186px;
  }
`;
const Two = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  color: #fff;

  p {
    font-size: 12px;
    margin: 0;
    margin-bottom: 15px;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const Title = styled.div`
  h3 {
    font-size: 12px;
    margin: 0;
    margin-bottom: 15px;
    font-weight: 600;
  }
`;
