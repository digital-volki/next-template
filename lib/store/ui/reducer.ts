import {actions} from "Lib/store/ui/actions";
import {fromRawCookies} from "Lib/hooks/useCookies";
import {baseEnv} from "Lib/utils/consts";


export const initState = {
    accessToken: null,
};


export const reducer = {
    [`${actions.setAccessToken}`]: (state: any, payload: string) => {

        fromRawCookies().set(baseEnv.another.token, payload)

        return { ...state, accessToken: payload}
    },
    [`${actions.removeAccessToken}`]: (state: any) => {

        fromRawCookies().remove(baseEnv.another.token)

        return { ...state, accessToken: null}
    }

}
