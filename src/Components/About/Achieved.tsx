import React from "react";
import styled from "styled-components";

const Achieved = () => {
  return (
    <Container>
      <Right>
        <h1>
          We’ve achieved many <i>great things</i>{" "}
        </h1>
      </Right>
      <Left>
        <LeftHold>
          <Box content={"2022"} display="flex"></Box>

          <TextHold>
            <h3>FUTURE</h3>
            <h4>We release our open marketplace</h4>
            <p>
              We unlock the ability for our users to interact directly with one
              another while launching new value-added services like healthcare.
            </p>
          </TextHold>
        </LeftHold>
        <LeftHold>
          <Box content={"2021"} display="flex"></Box>

          <TextHold>
            <h4>$200M Series E funding</h4>
            <p>
              Led by Softbank Vision Fund 2 with participation from new investor
              Whale Rock and existing investors including Generation Investment
              Management, Chan Zuckerberg Initiative, and Spark Capital.
            </p>
          </TextHold>
        </LeftHold>
        <LeftHold>
          <Box content={"2020"} display="flex"></Box>

          <TextHold>
            <h4>Global expansion announcement</h4>
            <p>
              After proving that remote work was the way of the future, we
              doubled down on our investment in global talent in emerging
              markets around the world.
            </p>
          </TextHold>
        </LeftHold>
        <LeftHold>
          <Box content={"2019"} display="flex"></Box>

          <TextHold>
            <h4>Welcomed senior remote engineers</h4>
            <p>
              Senior engineers in Egypt and Ghana joined the Andela community
              creating our first-ever remote hubs.
            </p>
          </TextHold>
        </LeftHold>
        <LeftHold>
          <Box content={"2018"} display="flex"></Box>

          <TextHold>
            <h4>Launched pan-African hub</h4>
            <p>
              In partnership with the Rwanda Development Board that integrates
              all government agencies responsible for the attraction, retention,
              and facilitation of investments in the national economy.
            </p>
          </TextHold>
        </LeftHold>
        <LeftHold>
          <Box content={"2017"} display="flex"></Box>

          <TextHold>
            <h4>Launched Andela Learning Community (ALC)</h4>
            <p>
              We partnered with Google and Udacity to create a technical
              learning program accessible to aspiring developers in Kenya,
              Nigeria, and Uganda.
            </p>
          </TextHold>
        </LeftHold>
        <LeftHold>
          <Box content={"2016"} display="flex"></Box>

          <TextHold>
            <h4>Launched an all-female cohort of engineers</h4>
            <p>
              To increase female representation in tech, Andela Kenya opened
              applications for an all-female contingent in the country’s capital
              of Nairobi.
            </p>
          </TextHold>
        </LeftHold>
        <LeftHold>
          <Box content={"2015"} display="flex"></Box>

          <TextHold>
            <h4>Our community became international</h4>
            <p>
              After incredible success in Nigeria, we opened applications to
              Kenya, Ghana, and South Africa with a new hub in Nairobi.
            </p>
          </TextHold>
        </LeftHold>
        <LeftHold>
          <Box content={"2014"} display="none"></Box>

          <TextHold>
            <h4>Launched our first recruitment cycle</h4>
            <p>
              We hired our first cohort – four Nigerian software engineers –
              after receiving 700 applications for 4 spot
            </p>
          </TextHold>
        </LeftHold>
      </Left>
    </Container>
  );
};

export default Achieved;
const LeftHold = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 90%;
  /* height: 100vh; */
  margin: auto;
  display: flex;
  margin-bottom: 50px;
`;
const Right = styled.div`
  width: 50%;
  height: 100%;

  h1 {
    width: 25vw;
    font-size: 50px;
    line-height: 48px;
    font-family: "Inria Serif", "Garamond", serif;
    margin: 0;
    font-weight: 500;
    color: #132128;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
`;
const Box = styled.div<{ content: string; display: string }>`
  display: flex;
  flex-direction: column;

  ::before {
    content: "${(props) => props.content}";
    width: 62px;
    height: 60px;
    font-size: 20px;
    font-weight: 500;
    border-radius: 50px;
    border: 1.7px solid #132128;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ::after {
    content: "";
    width: 0.3px;
    height: 150px;
    border: 1px solid #132128a4;
    background-color: #132128a2;
    margin-left: 32px;
    display: ${(props) => props.display};
  }
`;
const TextHold = styled.div`
  margin-left: 25px;

  h3 {
    margin: 0;
    color: #132128;
    font-family: "Inter", sans-serif;
    font-size: 18px;
  }
  h4 {
    margin: 0;
    margin-top: 20px;
    color: #132128;
    font-family: "Inter", sans-serif;
    font-size: 20px;
  }
  p {
    width: 30vw;
    color: #132128;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
    text-align: justify;
    margin-top: 30px;
  }
`;
