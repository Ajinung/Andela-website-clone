import React from "react";
import styled from "styled-components";
import Video from "../Asset/vid.jpg";
const CommunityTech = () => {
  return (
    <Container>
      <h3>Our vibrant community</h3>
      <p>Rizwan Jafri shares his Andela story from Lahore, Pakistan.</p>
      <VideoHold>
        <Vid src={Video} />
      </VideoHold>
    </Container>
  );
};
export default CommunityTech;

const Container = styled.div`
  width: 100%;
  height: 690px;
  background-color: #173b3f;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  h3 {
    font-size: 50px;
    font-weight: lighter;
    margin-bottom: 20px;
    margin-top: 23px;
  }
  p {
    margin: 0;
    font-size: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
const VideoHold = styled.div`
  width: 750px;
  height: 400px;
  margin-top: 35px;
`;
const Vid = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
