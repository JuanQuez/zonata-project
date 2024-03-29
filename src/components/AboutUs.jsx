import React from "react";
import styled from "styled-components";
import PhotoAbout from "/public/assets/img/about-zone.png"

const AboutUsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  background-color: #fff3c7;

  .box_image, .box_text {
    height: 100vh;
  }

  .box_text {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 4em;

    h2 {
      margin-bottom: .5em;
      font-size: 5em;
    }

    p {
      font-size: 2em;
      text-align: justify;
    }
  }

  .box_image {
    flex: 1;
    display: grid;
    place-items: center;

    img {
      border: .5em solid white;
      border-radius: 30%;
    }
  }
`;

const AboutUs = () => {
  return (
    <AboutUsContainer id="aboutUs">
      <div className="box_text">
        <h2>Zhonata</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellendus necessitatibus vel sed omnis, repellat a culpa? Maxime error quidem dolore suscipit, pariatur ab doloremque, reprehenderit molestiae assumenda unde fuga ullam omnis quaerat animi deleniti reiciendis laudantium, praesentium repellendus? Similique, laboriosam distinctio asperiores recusandae mollitia qui. Repellat laborum cupiditate perferendis!
        </p>
      </div>
      <div className="box_image">
        <img src={PhotoAbout} alt=""/>
      </div>
    </AboutUsContainer>
  );
};

export default AboutUs;
