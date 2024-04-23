import { GlobalStyle } from "@/styles/global";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Theme from "@/styles/Theme";
import StyledComponentsRegistry from "./registry";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <StyledComponentsRegistry>
          <Component {...pageProps} />
        </StyledComponentsRegistry>
      </ThemeProvider>
    </>
  );
}
