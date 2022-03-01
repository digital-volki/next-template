import {createActionNamespace} from "Lib/utils/store";


export const ui = createActionNamespace('ui');


export const actions = {
    setAccessToken: ui('SET_ACCESS_TOKEN'),
    removeAccessToken: ui('REMOVE_ACCESS_TOKEN'),
};
