import React from 'react';
import styled from 'styled-components';
import ButtonStyle from './button-desing/ButtonStyle';

const ContactContainer = styled.section`
  min-height: 100dvh;
  background-color: #fff3c7;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

  const FormBox = styled.section`
    width: 50em;

    form {
      display: flex;
      flex-direction: column;
      gap: 1em;

      h2 {
        font-size: 4em;
        text-align: center;
        margin-bottom: .4em;
      }

      input, textarea {
        border-radius: .5em;
        padding: .4em;
        font-size: 1.5em;
      }
    }
  `;


const Contact = () => {
  return (
    <ContactContainer id='contact'>
      <FormBox>
          <form>
            <h2>¡CONTACTANOS!</h2>
            <input placeholder="Nombre" name="name" type="text" required />
            <input placeholder="Email" name="email" type="email" required />
            <input
              placeholder="Motivo de contacto"
              name="subject"
              type="text"
            />
            <textarea
              placeholder="¡Escribe tu mensaje!"
              name="message"
              rows={6}
              required
            />
            <ButtonStyle
              type="submit"
            >
              Enviar
            </ButtonStyle>
          </form>
          </FormBox>
    </ContactContainer>
  );
};

export default Contact;