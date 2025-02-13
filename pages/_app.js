import "@/styles/GlobalStyles.js";
import { GlobalStyles } from "@/styles/GlobalStyles.js";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function MySideShopApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
