import {actions} from "Lib/store/ui/actions";


export const initState = {
    defaultValue: 'ui',
};


export const reducer = {
    [`${actions.setDefaultValue}`]: (state: any, payload: string) => {
        return { ...state, defaultValue: payload}
    }
}
