import {createActionNamespace} from "Lib/utils/store";


export const ui = createActionNamespace('ui');


export const actions = {
    setDefaultValue: ui('SET_DV'),
};
