import {NextPage} from "next";

import {DisCom} from "Components/DisCom";
import {useCookie} from "Lib/hooks/useCookies";
import {useDispatch, useSelector} from "Lib/hooks/useState";
import {uiState} from "Lib/store/ui";


const Home: NextPage = () => {

    const poi = useSelector('ui.defaultValue')
    const dp = useDispatch()
    const cookie = useCookie();
    return (
        <div className={'bg-one_cc'}>
            {poi}
            <button className='btn' onClick={() => dp(uiState.actions.setDefaultValue('s'))}>
                ss
            </button>
            <DisCom />
            <div className={'btn-one_cc btn'}>
                xs ss
            </div>
            {cookie.get('id')}
        </div>
    )
}

export default Home
