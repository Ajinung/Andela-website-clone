import React, { useState } from "react";
import styled from "styled-components";
import BoxDropdown from "./BoxDropdown";

const Skill = () => {
  const [drop, setDrop] = useState<boolean>(false);
  const [drop1, setDrop1] = useState<boolean>(false);
  const [drop2, setDrop2] = useState<boolean>(false);
  const [drop3, setDrop3] = useState<boolean>(false);
  const [drop4, setDrop4] = useState<boolean>(false);
  const [drop5, setDrop5] = useState<boolean>(false);
  const [drop6, setDrop6] = useState<boolean>(false);
  const [drop7, setDrop7] = useState<boolean>(false);
  const [drop8, setDrop8] = useState<boolean>(false);
  const [drop9, setDrop9] = useState<boolean>(false);
  const [drop10, setDrop10] = useState<boolean>(false);
  const [drop11, setDrop11] = useState<boolean>(false);
  const [drop12, setDrop12] = useState<boolean>(false);
  const [drop13, setDrop13] = useState<boolean>(false);
  const [drop14, setDrop14] = useState<boolean>(false);
  const [drop15, setDrop15] = useState<boolean>(false);
  const [drop16, setDrop16] = useState<boolean>(false);
  const [drop17, setDrop17] = useState<boolean>(false);
  const [drop18, setDrop18] = useState<boolean>(false);

  const toggle = () => {
    setDrop(!drop);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle1 = () => {
    setDrop1(!drop1);
    setDrop(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle2 = () => {
    setDrop2(!drop2);
    setDrop1(false);
    setDrop(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle3 = () => {
    setDrop3(!drop3);
    setDrop1(false);
    setDrop2(false);
    setDrop(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle4 = () => {
    setDrop4(!drop4);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle5 = () => {
    setDrop5(!drop5);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle6 = () => {
    setDrop6(!drop6);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle7 = () => {
    setDrop7(!drop7);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle8 = () => {
    setDrop8(!drop8);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle9 = () => {
    setDrop9(!drop9);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle10 = () => {
    setDrop10(!drop10);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle11 = () => {
    setDrop11(!drop11);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle12 = () => {
    setDrop12(!drop12);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle13 = () => {
    setDrop13(!drop13);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle14 = () => {
    setDrop14(!drop14);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle15 = () => {
    setDrop15(!drop15);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop(false);
    setDrop16(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle16 = () => {
    setDrop16(!drop16);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop(false);
    setDrop17(false);
    setDrop18(false);
  };
  const toggle17 = () => {
    setDrop17(!drop17);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop(false);
    setDrop18(false);
  };
  const toggle18 = () => {
    setDrop18(!drop18);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
    setDrop6(false);
    setDrop7(false);
    setDrop8(false);
    setDrop9(false);
    setDrop10(false);
    setDrop11(false);
    setDrop12(false);
    setDrop13(false);
    setDrop14(false);
    setDrop15(false);
    setDrop16(false);
    setDrop17(false);
    setDrop(false);
  };

  return (
    <Container>
      <Second>
        <p>Scale faster with Andela</p>
      </Second>
      <First>
        <h1> What skills will drive your vision?</h1>
      </First>

      <Third>
        <BoxAndDrop>
          <Box onClick={toggle}>
            <p>Python</p>
          </Box>
          {drop ? (
            <BoxDropdown text="Python is an interpreted, interactive object-oriented programin language." />
          ) : null}
        </BoxAndDrop>
        <BoxAndDrop>
          <Box onClick={toggle1}>
            <p>Node.js</p>
          </Box>
          {drop1 ? (
            <BoxDropdown text="Node.js is a javascript, runtime built on chrome's v8 engine" />
          ) : null}
        </BoxAndDrop>
        <BoxAndDrop>
          <Box onClick={toggle2}>
            <p>Kotlin</p>
          </Box>
          {drop2 ? (
            <BoxDropdown text="Kotlin is a statically typed, general purpose programming language with type inference" />
          ) : null}
        </BoxAndDrop>
        <BoxAndDrop>
          <Box onClick={toggle3}>
            <p>Flask</p>
          </Box>
          {drop3 ? (
            <BoxDropdown text="Flask is a micro web framework written in python." />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle4}>
            <p>React Native</p>
          </Box>
          {drop4 ? (
            <BoxDropdown text="React Native is a framework for creating native style apps for andoid and IOS" />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle5}>
            <p>Vue.js</p>
          </Box>
          {drop5 ? (
            <BoxDropdown text="Vue.js is a javascript framework for building interfaces" />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle6}>
            <p>PHP</p>
          </Box>
          {drop6 ? (
            <BoxDropdown text="PHP is an open source server side scripting language" />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle7}>
            <p>Android</p>
          </Box>
          {drop7 ? (
            <BoxDropdown text="Android is a mobile operating system developed by Google" />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle8}>
            <p>Javascript</p>
          </Box>
          {drop8 ? (
            <BoxDropdown text="Javascript an object-oriented programming language for scripting webpages" />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle9}>
            <p>Ruby</p>
          </Box>
          {drop9 ? (
            <BoxDropdown text="Ruby is a scripting language designed for front and back-end web development" />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle10}>
            <p>c#</p>
          </Box>
          {drop10 ? (
            <BoxDropdown text="c# is a programming language developed by microsoft that runs on the .net framework" />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle11}>
            <p>DevOps</p>
          </Box>
          {drop11 ? (
            <BoxDropdown text="DevOps is a set of practice that combines software developement and IT operations" />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle12}>
            <p>Golang</p>
          </Box>
          {drop12 ? (
            <BoxDropdown text="Node.js is a javascript, runtime built on chrome's v8 engine" />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle13}>
            <p>Data Scientists</p>
          </Box>
          {drop13 ? (
            <BoxDropdown text="One who writes code & adds with statistical knowledge to get insights from data." />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle15}>
            <p>React.js</p>
          </Box>
          {drop15 ? (
            <BoxDropdown text="React is component-based javascript library which is used to build user interface" />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle16}>
            <p>Swift</p>
          </Box>

          {drop16 ? (
            <BoxDropdown text="Swift is a programming language for iOS, iPadOS, macOS, tvOS, and watchOS." />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle17}>
            <p>Salesforce</p>
          </Box>
          {drop17 ? (
            <BoxDropdown text="Salesforce powerful CRM technology for nonprofits, educational institutions, and philanthropic organizations." />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle14}>
            <p>Java</p>
          </Box>
          {drop14 ? (
            <BoxDropdown text=" Java is a high level, robust, object-oriented and secure programming language. " />
          ) : null}
        </BoxAndDrop>

        <BoxAndDrop>
          <Box onClick={toggle18}>
            <p>Django</p>
          </Box>
          {drop18 ? (
            <BoxDropdown text="Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design." />
          ) : null}
        </BoxAndDrop>
      </Third>
    </Container>
  );
};

export default Skill;

const BoxAndDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Box = styled.div`
  width: 17.2vw;
  height: 2vh;
  background-color: #ffffffeb;
  border-radius: 40px;
  margin: 10px 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  transition: all ease-in 0.1s;
  color: #173b3f;
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
  color: black;

  :hover {
    transform: scale(1.05);
    color: #56c870;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #edeff1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const First = styled.div`
  margin: auto;
  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 3rem;
    text-align: center;
  }
`;
const Second = styled.div`
  margin: auto;
  font-family: sans-serif;
  font-size: 18px;
  /* margin-top: 50px; */
  /* background-color: #132128; */

  p {
    text-align: center;
    font-weight: 500;
    color: #132128;
    line-height: 28px;
    padding-top: 60px;
  }
`;
const Third = styled.div`
  width: 87%;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 80px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;
