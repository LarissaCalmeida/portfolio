import Theme from "@/styles/Theme";
import { GlobalStyle } from "@/styles/global";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: 0,
              fontSize: "16px",

              fontWeight: 500,
              lineHeight: "normal",
            },
            // icon: null,
            error: {
              style: {
                borderLeft: "5px solid #CF777D",
              },
            },
            success: {
              style: {
                borderLeft: "5px solid #529080",
              },
            },
          }}
        ></Toaster>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
