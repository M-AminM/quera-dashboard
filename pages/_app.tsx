import Layout from "@/components/Layout";
import "@/styles/global.css";
import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import { store } from "@/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { createTheme } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      fontFamily: ["iransans"].join(","),
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </SessionProvider>
    </ThemeProvider>
  );
}
