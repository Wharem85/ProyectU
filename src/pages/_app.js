import Head from 'next/head';
import theme from '@theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Proyecto Universidad</title>
      </Head>
      <ToastContainer newestOnTop />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
