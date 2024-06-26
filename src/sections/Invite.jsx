import React from "react";
import styled from "styled-components";

import img1 from "../assets/Images/1.jpg";
import img2 from "../assets/Images/2.JPG";
import img3 from "../assets/Images/3.jpg";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 40%;
        position: absolute;
        top: 10%;
        left: 54%;
        margin: 0px auto;
        padding: 1rem;
        font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    top: 20%;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 1rem;
    width: 33%;
    top: 10%;
    left: 57%;
  }
  @media (max-width: 28em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 1rem;
    width: 35%;
    top: 10%;
    left: 57%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      top: -20%;
      
      visibility: hidden;
    }
    .small-img-2 {
      width: 30%;
      height: auto;
      position: absolute;
      left: 60%;
      top: 54%;

      visibility: hidden;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: 3.7em;
  }
  @media (max-width: 30em) {
    font-size: 3em;
    top: 10%;
    left: -5%;
  }
`;

const Invite = () => {
  return (
    <Section id="fixed-target" className="invite">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        See you there!
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
          We are so excited and can't wait to see you. Help us capture our wedding with joy.
          <br /> <br />
          私たちはあなた方の参加を心から歓迎いたします。お会いできることを楽しみにしております。
      </Left>

      <Right>
        <img width="400" height="600" src={img1} alt="Invite" />
        <img
          width="400"
          height="600"
          className="small-img-1"
          src={img2}
          alt="Invite"
          data-scroll
          data-scroll-speed="5"
        />
        <img
          width="400"
          height="600"
          className="small-img-2"
          src={img3}
          alt="Invite"
          data-scroll
          data-scroll-speed="-2"
        />
      </Right>
    </Section>
  );
};

export default Invite;
