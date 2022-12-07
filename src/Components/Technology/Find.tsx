import React from "react";
import styled from "styled-components";
import Build from "../Build";
import one from "../Asset/Work.jpg";
import two from "../Asset/Work2.jpg";
import three from "../Asset/Work3.jpg";

const Find = () => {
  return (
    <Container>
      <First>
        <h1>
          <i>Find</i> what you’re looking for and more
        </h1>
      </First>
      <Second>
        <Build
          img={one}
          caption=""
          title="Grow your career with us"
          text=""
          flex=""
          titleWd="50%"
          rightWd="50%"
          display="flex"
          disp="none"
          margin="0px"
        />
        <Build
          img={two}
          caption=""
          title="Set your own rate"
          text=""
          flex="gh"
          titleWd="50%"
          rightWd="50%"
          display="flex"
          disp="none"
          margin="50px"
        />
        <Build
          img={three}
          caption=""
          title="Work anytime, anywhere"
          text=""
          flex=""
          titleWd="50%"
          rightWd="50%"
          display="flex"
          disp="none"
          margin="50px"
        />
      </Second>
    </Container>
  );
};

export default Find;

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
