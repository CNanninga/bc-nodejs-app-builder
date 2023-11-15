import { GlobalStyles } from '@bigcommerce/big-design';
import type { AppProps } from 'next/app';
import SessionProvider from '../context/session';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <GlobalStyles />
        <SessionProvider>
            <Component {...pageProps} />
        </SessionProvider>
    </>
 );
  
 export default MyApp;