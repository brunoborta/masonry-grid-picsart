import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, button, h2, p {
  font-family: "Poppins", sans-serif;
}

h2 {
    font-weight: 700;
    font-size: 1.5rem;
}

p {
    font-weight: 400;
    font-size: 1rem;
}

`;

export default GlobalStyle;
