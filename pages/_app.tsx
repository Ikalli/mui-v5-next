import { CacheProvider } from '@emotion/react';
import type { AppProps as NextAppProps } from 'next/app';
import type { EmotionCache } from '@emotion/react';

import createEmotionCache from 'emotion-cache';

import AppBar from 'components/AppBar';
import GlobalStyles from 'GlobalStyles';

interface AppProps extends NextAppProps {
    emotionCache?: EmotionCache;
}

const clientEmotionCache = createEmotionCache();

const App = (props: AppProps) => {
    const { Component, pageProps, emotionCache = clientEmotionCache } = props;

    return (
        <CacheProvider value={emotionCache}>
            <GlobalStyles>
                <AppBar />
                <Component { ...pageProps } />
            </GlobalStyles>
        </CacheProvider>
    );
}

export default App;
