import NextDocument, { Head, Html, Main, NextScript } from "next/document";

import { ColorModeScript } from "@chakra-ui/react";

import { config } from "@/chakra-base-config";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript initialColorMode={config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
