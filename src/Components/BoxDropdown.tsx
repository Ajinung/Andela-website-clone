import React from "react";
import styled from "styled-components";

interface Message {
  text: string;
}

const BoxDropdown: React.FC<Message> = ({ text }) => {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
};

export default BoxDropdown;

const Container = styled.div`
  transition: all ease-in 0.5s;
  p {
    width: 20vw;
    margin-top: 0;
  }
`;
