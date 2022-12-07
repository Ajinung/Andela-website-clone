import React from "react";
import styled from "styled-components";
import Build from "../Build";
import visual from "../Asset/Visual-3.png";

const Empower = () => {
  return (
    <Container>
      <Build
        img={visual}
        caption="
Empower your future"
        title="What Andela means to us"
        text="We exist to unlock human potential at scale. We envision a world where the most talented people can build a career commensurate with their ability – not their race, gender, or geography."
        flex="fr"
        titleWd="50%"
        rightWd="40%"
        display="none"
        disp="none"
        margin="90px"
      />
    </Container>
  );
};

export default Empower;

const Container = styled.div`
  width: 90%;
  margin: auto;
`;
