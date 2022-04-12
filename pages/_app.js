import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";
import Head from 'next/head';

// Providing context to entire app
import { ContextProvider } from '../context';

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Head>
        <title>NextChat</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='Radan Jovic' />
      </Head>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
