import React from "react";
import Build from "./Build";
import andela from "./Asset/Andela_NewLogos.png";
import visual from "./Asset/Visual-3.png";

const BuildTeam = () => {
  return (
    <div>
      <Build
        img={andela}
        caption="Build your team today"
        title="We’ve cracked the code on creating engineering teams"
        text="Skilled engineers, product managers, and designers at your
            fingertips. An extensive list of technical services to suit your
            business needs. Start building your world-class team faster with
            talent from Andela."
        flex="fr"
        titleWd="50%"
        rightWd="40%"
        display="none"
        disp=""
        margin=""
      />
      <Build
        img={visual}
        caption="Empower your future"
        title="Why the world’s best talent prefers Andela"
        text=""
        flex=""
        titleWd="30%"
        rightWd="55%"
        display="flex"
        disp=""
        margin=""
      />
    </div>
  );
};

export default BuildTeam;
