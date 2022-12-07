import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <h1>Page Not Found!</h1>
      <h2>The requested page is not found or may have moved to a new url</h2>

      <NavLink to="/">
        <button>Go back home</button>
      </NavLink>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #173b3f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 5rem;
    margin: 0;
    color: #fff;
    font-family: serif;
  }
  h2 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
    font-weight: 100;
  }

  button {
    padding: 24px 40px;
    border-radius: 40px;
    margin-top: 50px;
    cursor: pointer;
    background-color: #56c870;
    font-size: 20px;
    transition: all 0.2s ease-in;
    border: none;

    :hover {
      transform: scale(1.03);
    }
  }
`;
