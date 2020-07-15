import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    background-color: var(--quaternary);
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(22,24,27);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --gray: #334344;
    --senary: #828386;
    --mention-message: #413f3f;
    --link: #5d80d6;
    --linkHover: #5271ff;
    --online: #3CB371;
    --light: #f5f5fb;
    --orkut: rgb(287, 27, 174);
    --offline: #B22222
  }
`;