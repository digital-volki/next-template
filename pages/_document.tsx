import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
    render() {
        // noinspection HtmlRequiredTitleElement
        return (
            <Html>
                <Head>
                    {/* ADD FONT HERE */}

                    {/* https://nextjs.org/docs/basic-features/font-optimization#usage */}

                    {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
