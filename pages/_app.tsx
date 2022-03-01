import 'styles/global.scss'
import App, {AppProps, AppContext} from 'next/app'
import {ApolloProvider} from "@apollo/client";
import fp from "lodash/fp";

import {GeneralCtx} from "Components/GeneralCtx";
import {useApollo} from "Lib/apollo";
import {useCookies} from "Lib/hooks/useCookies";
import {baseEnv} from "Lib/utils/consts";


interface IAppProps extends AppProps {
    cookie: string
    host: string
}

function RootApp({Component, pageProps, cookie, host}: IAppProps) {
    const cookies = useCookies(cookie, host)
    const client = useApollo(pageProps, cookies.get(baseEnv.another.token));

    return (
        <ApolloProvider client={client}>
            <GeneralCtx
                externalData={{
                    ui: {
                        accessToken: cookies.get(baseEnv.another.token) || null
                    }
                }}
            >
                <Component {...pageProps} />
            </GeneralCtx>
        </ApolloProvider>

    )
}

RootApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);
    return {
        ...appProps,
        cookie: fp.get('ctx.req.headers.cookie', appContext),
        host: fp.get('ctx.req.headers.host', appContext).split(':')[0]
    }
}


export default RootApp
