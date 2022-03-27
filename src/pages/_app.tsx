import "../styles/globals.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "../app/store";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <BaseWrapper>
        <Component {...pageProps} />
      </BaseWrapper>
    </Provider>
  );
}

const BaseWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="font-sans  min-w-screen min-h-screen">{children}</div>
);
