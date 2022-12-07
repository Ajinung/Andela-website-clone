import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnytimeBox from "./AnytimeBox";
import GlobalButton from "./GlobalButton";
import purple from "./Asset/purple.svg";
import red from "./Asset/red.svg";
import yellow from "./Asset/yellow.svg";

const Anytime = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.12,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Container>
      <First>
        <h1>
          {" "}
          <i>Anytime, anywhere – </i> with Andela, the future of work is here
        </h1>
      </First>
      <Second>
        <p>
          Discover how leading companies have built impactful global teams with
          Andela
        </p>
      </Second>
      <Third>
        <Slider {...settings}>
          <AnytimeBox
            bg="#C95227"
            img={yellow}
            text="How Mindshare Scales Data Teams to Serve the World’s Largest Advertisers"
          />
          <AnytimeBox
            bg="#4A1476"
            img={purple}
            text="  Stax leverages Andela engineers to scale product features and
            enhancements"
          />
          <AnytimeBox
            bg="#701340"
            img={red}
            text="How GitHub Optimizes a Globally Distributed Engineering Team with Andela"
          />
          <AnytimeBox
            bg="#4A1476"
            img={purple}
            text="How a Top 10 Global Investment Bank is Rapidly Expanding Its Services by Leveraging Remote Talent"
          />
          {/* <AnytimeBox bg="indigo" /> */}
          {/* <AnytimeBox bg="brown" /> */}
          {/* <AnytimeBox /> */}
        </Slider>
        <Btn>
          <GlobalButton
            col="#132128"
            bg=""
            bd="1px solid #132128;"
            text="All case studies"
            pad="24px 40px"
            rad="50px"
          />
        </Btn>
      </Third>
    </Container>
  );
};

export default Anytime;

const Container = styled.div`
  width: 100%;
  margin-top: 70px;
`;

const First = styled.div`
  width: 45vw;
  margin: auto;
  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 3rem;
    text-align: center;
    opacity: 0.9;
  }
`;
const Second = styled.div`
  width: 80%;
  margin: auto;
  font-family: sans-serif;
  font-size: 18px;
  margin-top: 30px;

  p {
    text-align: center;
    opacity: 0.9;
    font-weight: lighter;
    color: #132128;
    line-height: 28px;
  }
`;
const Third = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  padding: 20px;
  overflow: hidden;
`;
const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;
