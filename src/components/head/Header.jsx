import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import ButtonStyle from "../button-desing/ButtonStyle";
import Background from "/public/assets/img/header-resources/33024-rozovyiy_zakat_domik_gora.jpg";

const HeaderContainer = styled.section`
  position: relative;
  min-height: 100dvh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;

  .head {
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--cap-overlay);

    &,
    .head__button__box {
      display: flex;
    }

    .head__text__box {
      text-align: center;
      margin-bottom: 1.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h1,
      h2 {
        color: var(--color-white-pure);
        text-transform: uppercase;
      }

      h1 {
        font-size: 6em;
        letter-spacing: 0.05em;
      }

      h2 {
        font-size: 3em;
        margin-bottom: 0.2em;
        color: var(--color-quaternary);
      }

      h3 {
        font-size: 1.5em;
        color: var(--color-quaternary);
      }
    }

    .head__button__box {
      justify-content: center;
      gap: 2em;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
      <div className="head">
        <div className="head__text__box">
          <h1>zhonata</h1>
          <h2>parque turistico</h2>
          <h3>atracciónes, cabañas, turismo, senderismo y más</h3>
        </div>
        <div className="head__button__box">
          <ButtonStyle>servicios</ButtonStyle>
          <ButtonStyle>alquiler</ButtonStyle>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
