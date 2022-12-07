import React from "react";
import styled from "styled-components";

const Winning = () => {
  return (
    <Container>
      <Top>
        <h1>
          We create <i>winning teams</i>
        </h1>
        <p>
          We help you source, evaluate, and hire specialized talent compliant
          with local laws in 100 countries.
        </p>
      </Top>
      <Bottom>
        <Box>
          <h1>Source</h1>
          <p>
            We’ll work with you to fully understand your technical gaps,
            culture, industry regulations, and strategic route. Instantly view a
            curated selection of technologist profiles that meet your needs.
          </p>
        </Box>
        <Box>
          <h1>Assess</h1>
          <p>
            Our proprietary assessments are designed to find you the best talent
            by role, no matter where they are in the world. Based on your team’s
            goals, meet vetted technologists you can trust.
          </p>
        </Box>
        <Box>
          <h1>Match</h1>
          <p>
            Connect within hours, with vetted technologists who can easily align
            with your existing teams, tools, and workflows. Our matching times
            are consistently twice as fast compared to industry standards.
          </p>
        </Box>
        <Box>
          <h1>Delivery</h1>
          <p>
            With a focus on sustainable growth, we’re with you every step of the
            way. From rapid onboarding and seamless integration to global
            payroll solutions and compliance support.
          </p>
        </Box>
      </Bottom>
    </Container>
  );
};

export default Winning;

const Container = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  color: #132128;
`;

const Top = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  color: #132128;
  h1 {
    margin-top: 100px;
    font-size: 2.8rem;
    font-weight: 100;
    margin-bottom: 10px;
  }
  p {
    font-size: 19px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    opacity: 0.9;
  }
`;
const Bottom = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Box = styled.div`
  height: 32vh;
  width: 14vw;
  background-color: #fff;
  border-radius: 12px;
  padding: 24px 36px 12px 36px;
  margin-right: 24px;
  margin-bottom: 150px;

  h1 {
    font-size: 24px;
    font-weight: 100;
    font-style: italic;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    opacity: 0.9;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
