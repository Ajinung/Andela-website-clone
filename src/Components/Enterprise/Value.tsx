import React from "react";
import styled from "styled-components";
import Build from "../Build";
import one from "../Asset/section1.jpg";
import two from "../Asset/section2.jpg";
import three from "../Asset/section3.jpeg";
import { NavLink } from "react-router-dom";

const Value = () => {
  return (
    <Container>
      <First>
        <h1>
          Let’s help you <i>add value</i> to your business
        </h1>
        <p>
          Discover our global neighborhood of{" "}
          <NavLink to="/">technologists.</NavLink>{" "}
        </p>
      </First>
      <Second>
        <Build
          img={one}
          caption=""
          title="Speed to match"
          text="Move faster without sacrificing quality. Our team can radically reduce the time it takes to hire talent so you can find the right fit, quickly."
          flex=""
          titleWd="50%"
          rightWd="50%"
          display="none"
          disp="none"
          margin="0px"
        />
        <Build
          img={two}
          caption=""
          title="Enterprise-ready"
          text="Technologists with verified backgrounds, aligned to your time zones, and compliant with your company’s security practices so you can focus on making an impact."
          flex="gh"
          titleWd="50%"
          rightWd="50%"
          display="none"
          disp="none"
          margin="50px"
        />
        <Build
          img={three}
          caption=""
          title="Flexible teams"
          text="Find niche expertise for various project lengths. Onboard solo engineers to fill gaps or hire full teams to accelerate your build. Any team, any timezone, any skills."
          flex=""
          titleWd="50%"
          rightWd="50%"
          display="none"
          disp="none"
          margin="50px"
        />
      </Second>
    </Container>
  );
};

export default Value;

const Container = styled.div`
  width: 90%;
  /* height: 100vh; */
  /* background-color: red; */
  margin: auto;
  color: #132128;
`;
const First = styled.div`
  width: 100%;
  /* height: 20vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 42px;
    font-weight: 100;
  }
  p {
    font-size: 20px;
    margin: 0;
  }
`;
const Second = styled.div`
  /* background-color: green; */
`;
