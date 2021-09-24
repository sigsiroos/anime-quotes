import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import DebugObserver from "../components/DebugObserver";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <DebugObserver />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
