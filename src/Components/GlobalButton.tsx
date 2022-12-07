import React from "react";
import styled from "styled-components";

interface Btnprop {
  text: string;
  bg: string;
  bd: string;
  col: string;
  pad: string;
  rad: string;
}

const GlobalButton: React.FC<Btnprop> = ({ text, bg, bd, col, pad, rad }) => {
  return (
    <Container>
      <GButton bg={bg} bd={bd} col={col} pad={pad} rad={rad}>
        {text}
      </GButton>
    </Container>
  );
};

export default GlobalButton;

const Container = styled.div`
  font-family: sans-serif;
`;

const GButton = styled.div<{
  bg: string;
  bd: string;
  col: string;
  pad: string;
  rad: string;
}>`
  padding: ${({ pad }) => pad};
  background-color: ${({ bg }) => bg};
  border-radius: ${({ rad }) => rad};
  margin-right: 22px;
  border: ${({ bd }) => bd};
  color: ${({ col }) => col};
  font-weight: 500;
  font-size: 18px;
  transition: all ease-in 0.2s;

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
