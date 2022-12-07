import React from "react";
import styled from "styled-components";
import john from "../Asset/Johnson.jpg";
import vit from "../Asset/Vitri.jpg";
import mary from "../Asset/Mary-Decker.jpg";
import jef from "../Asset/Jeff.png";
import alv from "../Asset/Alvaro.jpg";
import sac from "../Asset/Sachin.jpeg";
import ctr from "../Asset/courtney.jpeg";
import kev from "../Asset/kevin.jpg";
import msh from "../Asset/msheadshot.png";
import tis from "../Asset/Tisbe.jpg";
import kir from "../Asset/Kirsten.jpg";
import mik from "../Asset/Mike.jpg";

const BriliantMind = () => {
  return (
    <Container>
      <Wrapper>
        <First>
          <h1>
            Brilliant minds and companies come together to <i>build</i> the
            future
          </h1>
        </First>
        <Second>
          <p>
            Meet the team dedicated to helping the world’s best companies build
            the world’s best teams.
          </p>
        </Second>
        <Third>
          <Box>
            <Top>
              <img src={john} alt="" />
            </Top>
            <Bottom bg="#ecedfd">
              <h3>Jeremy Johnson</h3>
              <p>Co-Founder & CEO</p>
            </Bottom>
          </Box>
          <Box>
            <Top>
              <img src={vit} alt="" />
            </Top>
            <Bottom bg="#B0D6CE">
              <h3>Vitri Bhandari</h3>
              <p>Chief People Officer</p>
            </Bottom>
          </Box>
          <Box>
            <Top>
              <img src={mary} alt="" />
            </Top>
            <Bottom bg="#FDF0DC">
              <h3>Mary Decker</h3>
              <p>Chief of Staff</p>
            </Bottom>
          </Box>
          <Box>
            <Top>
              <img src={jef} alt="" />
            </Top>
            <Bottom bg="#B0D6CE">
              <h3>Jeff Pedersen</h3>
              <p>Chief Financial Officer</p>
            </Bottom>
          </Box>
          <Box>
            <Top>
              <img src={alv} alt="" />
            </Top>
            <Bottom bg="#ECEDFD">
              <h3>Alvaro Oliveira</h3>
              <p>Chief Network Officer</p>
            </Bottom>
          </Box>
          <Box>
            <Top>
              <img src={sac} alt="" />
            </Top>
            <Bottom bg="#FDF0DC">
              <h3>Sachin Bhagwat</h3>
              <p>Chief Revenue Officer</p>
            </Bottom>
          </Box>
          <Box>
            <Top>
              <img src={msh} alt="" />
            </Top>
            <Bottom bg="#ECEDFD">
              <h3>Michael Starkenburg</h3>
              <p>Chief Product and Technology Officer</p>
            </Bottom>
          </Box>
          <Box>
            <Top>
              <img src={ctr} alt="" />
            </Top>
            <Bottom bg="#B0D6CE">
              <h3>Courtney Machi</h3>
              <p>VP of Product</p>
            </Bottom>
          </Box>
          <Box>
            <Top>
              <img src={kev} alt="" />
            </Top>
            <Bottom bg="#FDF0DC">
              <h3>Kevin Pope</h3>
              <p>VP of Engineering</p>
            </Bottom>
          </Box>
          <Box>
            <Top>
              <img src={tis} alt="" />
            </Top>
            <Bottom bg="#B0D6CE">
              <h3>Tisbe Galindo</h3>
              <p>EVP, Financial Planning</p>
            </Bottom>
          </Box>
          <Box>
            <Top>
              <img src={kir} alt="" />
            </Top>
            <Bottom bg="#ECEDFD">
              <h3>Kirsten Canton</h3>
              <p>EVP, General Counsel</p>
            </Bottom>
          </Box>
          <Box>
            <Top>
              <img src={mik} alt="" />
            </Top>
            <Bottom bg="#FDF0DC">
              <h3>Mike Ndimurukundo</h3>
              <p>Managing Director, Rwanda</p>
            </Bottom>
          </Box>
        </Third>
      </Wrapper>
    </Container>
  );
};

export default BriliantMind;

const Box = styled.div`
  width: 190px;
  height: 250px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  margin-right: 13px;
  margin-bottom: 13px;
`;
const Top = styled.div`
  height: 70%;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const Bottom = styled.div<{ bg: string }>`
  height: 30%;
  width: 100%;
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
  }
  p {
    font-size: 12px;
    margin: 0;
    text-align: center;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
`;
const Container = styled.div`
  width: 100%;
  /* height: 90vh; */
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const First = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: serif;
    font-size: 2.8rem;
    width: 50vw;
    text-align: center;
    font-weight: 100;
    opacity: 0.9;
    margin: 0;
  }
`;
const Second = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  p {
    width: 28vw;
    text-align: center;
    font-size: 18px;
    margin-top: 30px;
    opacity: 0.9;
  }
`;
const Third = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
