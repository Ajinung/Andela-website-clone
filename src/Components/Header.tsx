import React, { useState } from "react";
import styled from "styled-components";
// import logo from "./Asset/andela.svg";
// import logo2 from "./Asset/andela-black.svg";
import logo from "./Asset/isaaclight.png";
import logo2 from "./Asset/ISAACDrk.png";
import GlobalButton from "./GlobalButton";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const navChange = () => {
    if (window.scrollY >= 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", navChange);

  return (
    <>
      {show ? (
        <Container bg="#fffffff9" bx="0px -1px 15px 5px rgb(0 0 0 / 45%)">
          <Wrapper>
            <NavLink to="/">
              <Logo src={logo2} />
            </NavLink>
            <NavHold>
              <Nav col="#000" to="/technology">
                For Technology Experts
              </Nav>
              <Nav col="#000" to="/">
                Business
              </Nav>
              <Nav col="#000" to="/enterprise">
                Enterprise
              </Nav>
              <Nav col="#000" to="/about">
                About Us
              </Nav>
            </NavHold>
            <Button>
              <GlobalButton
                text="Apply for Jobs"
                bg=""
                bd="1px solid #000"
                col="#000"
                pad="10px 35px"
                rad="20px"
              />
              <GlobalButton
                text="Hire Talent"
                bg="#56C870"
                bd=""
                col="#fff"
                pad="10px 35px"
                rad="20px"
              />
            </Button>
            <Menu>
              <AiOutlineMenu />
            </Menu>
          </Wrapper>
        </Container>
      ) : (
        <Container bg="none" bx="">
          <Wrapper>
            <NavLink to="/">
              <Logo src={logo} />
            </NavLink>
            <NavHold>
              <Nav col="#fff" to="/technology">
                For Technology Experts
              </Nav>
              <Nav col="#fff" to="/">
                Business
              </Nav>
              <Nav col="#fff" to="/enterprise">
                Enterprise
              </Nav>
              <Nav col="#fff" to="/about">
                About Us
              </Nav>
            </NavHold>
            <Button>
              <GlobalButton
                text="Apply for Jobs"
                bg=""
                bd="1px solid #fff"
                col="#fff"
                pad="10px 35px"
                rad="20px"
              />
              <GlobalButton
                text="Hire Talent"
                bg="#56C870"
                bd=""
                col="#fff"
                pad="10px 35px"
                rad="20px"
              />
            </Button>
            <Menu>
              <AiOutlineMenu />
            </Menu>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Header;

const Menu = styled.div`
  display: none;
  font-size: 25px;

  @media screen and (max-width: 650px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div<{ bg: string; bx: string }>`
  width: 100%;
  height: 100px;
  background-color: ${({ bg }) => bg};
  box-shadow: ${({ bx }) => bx};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 999;
  transition: all 0.2s ease-in-out;
  font-family: sans-serif;
`;
const Logo = styled.img`
  width: 12vw;
  margin-right: 90px;
  text-decoration: none;
  /* margin-left: 60px; */

  @media screen and (max-width: 960px) {
    width: 25vw;
  }
`;
const NavHold = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Nav = styled(NavLink)<{ col: string }>`
  margin-right: 60px;
  font-weight: 500;
  font-size: 18px;
  text-transform: capitalize;
  text-decoration: none;
  color: ${({ col }) => col};
  transition: all ease-in 1px;

  :hover {
    cursor: pointer;
  }
`;
const Button = styled.div`
  display: flex;
  margin-left: 20px;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;
