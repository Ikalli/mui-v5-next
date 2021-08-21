import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import type { DocumentContext } from 'next/document';

import createEmotionCache from 'emotion-cache';

export default class CustomDocument extends Document {
    static async getInitialProps(context: DocumentContext) {
        const originalRenderPage = context.renderPage;

        const cache = createEmotionCache();
        const { extractCriticalToChunks } = createEmotionServer(cache);

        context.renderPage = () => originalRenderPage({
            // eslint-disable-next-line react/display-name
            enhanceApp: (App: any) => props => <App emotionCache={cache} { ...props } />
        });

        const initialProps = await Document.getInitialProps(context);
        const emotionStyles = extractCriticalToChunks(initialProps.html);
        const emotionStyleTags = emotionStyles.styles.map((style) => (
            <style
            key={style.key}
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: style.css }} />
        ));

        return {
            ...initialProps,
            styles: [
                ...React.Children.toArray(initialProps.styles), 
                ...emotionStyleTags
            ]
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
} 