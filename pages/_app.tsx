import Layout from "@/components/Layout";
import "@/styles/global.css";
import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
