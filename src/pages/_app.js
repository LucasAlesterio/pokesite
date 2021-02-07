import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head';

const theme = {
    colors: {
        primary: '#151515',
        secondary: '#C2C2C2',
    },
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        font-family: 'Lato', sans-serif;
        background-color: ${theme.colors.primary};
    }
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    `

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Pokedex</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}