import React from "react";
import styled from "styled-components";
import Build from "../Build";
import visual from "../Asset/Visual-3.png";

const Btalents = () => {
  return (
    <Container>
      <Build
        img={visual}
        caption="
Empower your future"
        title="Why the world’s best talent prefers Andela"
        text=""
        flex="fr"
        titleWd="50%"
        rightWd="40%"
        display="flex"
        disp="flex"
        margin="90px"
      />
    </Container>
  );
};

export default Btalents;

const Container = styled.div`
  width: 90%;
  margin: auto;
`;
