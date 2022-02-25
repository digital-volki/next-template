import {NextPage} from "next";
import {useQuery} from "@apollo/client";

import {DisCom} from "Components/DisCom";
import {useDispatch, useSelector} from "Lib/hooks/useState";
import {uiState} from "Lib/store/ui";
import BASE_IO from 'gql/checking/baseIo.graphql'


const Home: NextPage = () => {

    const poi = useSelector('ui.defaultValue')
    const dp = useDispatch()
    // const cookie = useCookies();

    const {loading, data} = useQuery(BASE_IO);

    return (
        <div className={'bg-one_cc'}>
            {loading || JSON.stringify(data)}
            {poi}
            <button className='btn' onClick={() => dp(uiState.actions.setDefaultValue('s'))}>
                ss
            </button>
            <DisCom />
            <div className={'btn-one_cc btn'}>
                xs ss
            </div>
            {/*{cookie.get('id')}*/}
        </div>
    )
}

export default Home
