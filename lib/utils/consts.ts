
const url = `https://${process.env.NEXT_PUBLIC_BASE_URL}/`

const backendUrls = {
    base: `${url}`,
    gql: `${url}graphql/`,
    system: `${url}graphql/system/`,
    assets: `${url}assets/`,
}

const colors = {
    one_cc: 'yellow'
}

type IBaseEnv = {
    [i: string]: {
        [k: string]: string
    }
}

export const baseEnv: IBaseEnv = {
    backendUrls,
    colors,
}
