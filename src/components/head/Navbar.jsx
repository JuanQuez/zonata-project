import React from "react";
import styled from "styled-components";
// import resources
import Logotype from "/public/assets/img/logo/zhonata_only_logo_white.png";
import WhatsappIcon from "/public/assets/svg/nav-resources/whatsapp-icon-logo-svgrepo-com.svg";

const NavContainer = styled.section`
  width: 100%;
  position: absolute;
  top: 0;
  background: transparent;
  padding: 1.5em 4em;
  justify-content: space-between;
  align-items: center;

  &,
  .nav__links,
  .nav__links__list {
    display: flex;
  }

  img {
    height: 3em;
  }

  .nav__links {
    gap: 5em;

    .nav__links__list {
      gap: 5em;
      align-items: center;

      a {
        text-transform: uppercase;
        font-size: 1.2em;
        color: var(--color-white-pure);
        transition: 0.5s;
        padding-bottom: 0.2em;

        &:hover {
          color: var(--color-quaternary);
        }
      }
    }
  }

  img {
    height: 3em;
    transition: 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <img src={Logotype} alt="logotype" />

      <div className="nav__links">
        <ul className="nav__links__list">
          <li>
            <a href="#aboutUs">sobre zhonata</a>
          </li>
          <li>
            <a href="#services">servicios</a>
          </li>
          <li>
            <a href="#contact">contacto</a>
          </li>
        </ul>

        <img src={WhatsappIcon} alt="contact_icon" />
      </div>
    </NavContainer>
  );
};

export default Navbar;
