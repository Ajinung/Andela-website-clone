import React from "react";
import styled from "styled-components";
import pic from "../Asset/Work.jpg";
const GrowTech = () => {
  return (
    <Container>
      <h1>Find what you’re looking for and more</h1>
      <Hold>
        <Left>
          <img src={pic} alt="" />
        </Left>
        <Right>
          <h3>Grow your career with us</h3>
          <ul>
            <li>
              Find meaningful, long-term work with interesting organizations
            </li>
            <li>Work with an internationally distributed team and company</li>
            <li>
              Gain additional skills through exclusive learning opportunities
            </li>
            <li>Network with other technologists to develop your expertise</li>
          </ul>
        </Right>
      </Hold>
    </Container>
  );
};

export default GrowTech;

const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: lighter;
    font-size: 45px;
  }
`;
const Left = styled.div`
  width: 630px;
  height: 420px;
  display: flex;
  align-items: center;
  img {
    width: 80%;
    object-fit: cover;
  }
`;
const Right = styled.div`
  /* width: 600px;
  height: 350px;
  background: blue; */

  margin-left: 70px;

  h3 {
    font-size: 39px;
    font-weight: lighter;
    margin-bottom: 15px;
    margin-left: 10px;
  }

  ul {
    font-size: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  li {
    margin-bottom: 15px;
  }
`;

const Hold = styled.div`
  display: flex;
  margin-bottom: 40px;
`;
