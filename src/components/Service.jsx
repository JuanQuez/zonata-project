import React from "react";
import styled from "styled-components";
import "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js";
import ButtonStyle from "./button-desing/ButtonStyle";
import Bedroom from "/public/assets/img/bedroom.png";
import ZonesInterect from "/public/assets/img/zones-recreation.png";
import BarTender from "/public/assets/img/bar.png";

const ServiceContainer = styled.section`
  min-height: 100dvh;
  background-color: #fff3c7;
  display: flex;
  align-items: center;
  justify-content: center;

  .box_cards {
    display: flex;
    gap: 6em;
    
    .card {
      display: flex;
      background-color: var(--color-tertiary);
      border-radius: 1em;
      border: .2em solid white;
      justify-content: center;
      height: 33em;
      width: 25em;
      align-items: center;
      flex-direction: column;
      gap: 1em;
      padding: 1.5em;
      text-align: center;

      .box__image {
        height: 15em;

        img {
          border-radius: 2em;
          height: 100%;
          width: 15em;
          border: .2em solid white;
        }
      }

      p {
        text-align: justify;
      }
      .button__box {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

  }
`;

const Service = () => {
  return (
    <ServiceContainer id="services">
      <div className="box_cards">
        <div className="card">
          <div className="box__image">
            <img
              src={Bedroom}
              alt=""
            />
          </div>
          <h2>alojamiento</h2>
          <h3>$250.000 /n</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem
            dolorem quia pariatur impedit quisquam ea? Tempore dolorum
            cupiditate repellat.
          </p>
        <div className="button__box">
          <ButtonStyle>Contratar</ButtonStyle>
        </div>
        </div>
        <div className="card">
          <div className="box__image">
            <img
              src={BarTender}
              alt=""
            />
          </div>
          <h2>Gastrobar</h2>
          <h3>$200.000</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem
            dolorem quia pariatur impedit quisquam ea? Tempore dolorum
            cupiditate repellat.
          </p>
        <div className="button__box">
          <ButtonStyle>Contratar</ButtonStyle>
        </div>
        </div>
        <div className="card">
          <div className="box__image">
            <img
              src={ZonesInterect}
              alt=""
            />
          </div>
          <h2>alquiler de espacios recreativos</h2>
          <h3>$70.000 /h</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem
            dolorem quia pariatur impedit quisquam ea? Tempore dolorum
            cupiditate repellat.
          </p>
        <div className="button__box">
          <ButtonStyle>Contratar</ButtonStyle>
        </div>
        </div>
      </div>
    </ServiceContainer>
  );
};

export default Service;
