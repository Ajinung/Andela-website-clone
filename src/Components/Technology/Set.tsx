import React from "react";
import styled from "styled-components";
import pic from "../Asset/Work2.jpg";
const Set = () => {
  return (
    <Container>
      <Hold>
        <Left>
          <img src={pic} alt="" />
        </Left>
        <Right>
          <h3>Set your own rate</h3>
          <ul>
            <li>Only work with companies we trust</li>
            <li>
              Receive payments on time in your local currency, USD, or in Crypto
            </li>
            <li>Discover salaries that match your skills and experience</li>
          </ul>
        </Right>
      </Hold>
    </Container>
  );
};

export default Set;

const Container = styled.div`
  width: 100%;
  /* height: 550px; */
  /* background-color: red; */
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  h1 {
    font-weight: lighter;
    font-size: 45px;
  }
`;
const Left = styled.div`
  width: 630px;
  height: 420px;
  /* background: gold; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Right = styled.div`
  /* width: 600px;
  height: 350px;
  background: blue; */

  margin-right: 120px;

  h3 {
    font-size: 39px;
    font-weight: lighter;
    margin-bottom: 15px;
    margin-left: 10px;
  }

  ul {
    font-size: 22px;
  }
`;

const Hold = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 96%;
  flex-direction: row-reverse;
`;
