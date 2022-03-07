import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import baseTheme from "@/chakra-base-theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={baseTheme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
