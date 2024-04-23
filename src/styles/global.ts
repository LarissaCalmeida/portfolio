import { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Heebo', sans-serif;
    outline: none;
    border: none;
    scroll-behavior: smooth;
}


body {
    background-color :#0E0E0E;
    color: #F5F6F6;
}


`;
