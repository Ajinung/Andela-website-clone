import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrilCard from "./BrilCard";
import nebu from "../Components/Asset/Nebula.png";
import gopuf from "../Components/Asset/gopuff.png";
import flux from "../Components/Asset/Fluxx.png";
import ibm from "../Components/Asset/ibm.png";
import log from "../Components/Asset/Logitech.png";
import branch from "../Components/Asset/branch.png";
import tun from "../Components/Asset/attune.png";
import gold from "../Components/Asset/goldman.svg";

const Brilliant = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Container>
      <Top>
        <h1>Brilliant minds and companies come together to build the future</h1>
      </Top>
      <Bottom>
        <Slider {...settings}>
          <BrilCard
            bg="#b0d6ce"
            text="The caliber of their talent, and commitment of their talent, and the velocity of hiring are truly exceptional. "
            img={nebu}
          />
          <BrilCard
            bg="#FCE1E1"
            text="We have been working with our Andela teammates since 2018. work incredibly well with our team."
            img={flux}
          />
          <BrilCard
            bg="#EBE0FF"
            text="The team has been very transparent and if we need to change eto quickly turn around candidates."
            img={gopuf}
          />
          <BrilCard
            bg="#EBE0FF"
            text="We are getting a very large bang for our buck. The  team are self-starters and are able to take direction and execute. "
            img={tun}
          />
          <BrilCard
            bg="#E0F1EB"
            text="he team has been very transparent when sourcing  to change direction they are able to quickly turn around candidates."
            img={gold}
          />
          <BrilCard
            bg="#B0D6CE"
            text="We love working with Andela. Overall we’ve had a great experience  talent who have joined Branch. "
            img={branch}
          />
          <BrilCard
            bg="#FDF0DC"
            text="Andela is a relatively new partner for us; however, quickly  suppliers and are able to turn-around talent quickly. Their model really seems to work. We look forward to continuing business."
            img={log}
          />
          <BrilCard
            bg="#EBE0FF"
            text="Andela provides excellent service and support,  and top-notch talent. They identified the perfect match skillset-wise. "
            img={ibm}
          />
        </Slider>
      </Bottom>
    </Container>
  );
};

export default Brilliant;

const Container = styled.div`
  /* height: 70vh; */
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    width: 40vw;
    text-align: center;
    font-weight: 100;
    font-size: 2.8rem;
  }
`;
const Bottom = styled.div`
  /* height: 50vh; */
  margin-top: 40px;
  padding: 10px;
  overflow: hidden;
`;
