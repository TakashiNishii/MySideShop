import { persistor, store } from "@/store/store";
import "@/styles/GlobalStyles.js";
import { GlobalStyles } from "@/styles/GlobalStyles.js";
import { theme } from "@/styles/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

export default function MySideShopApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
