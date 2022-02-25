import 'styles/global.scss'
import {AppProps} from 'next/app'

import {GeneralCtx} from "Components/GeneralCtx";


function MyApp({Component, pageProps}: AppProps) {
    return (
        <GeneralCtx>
            <Component {...pageProps} />
        </GeneralCtx>
    )
}


export default MyApp
