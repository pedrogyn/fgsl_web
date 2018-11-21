import env from '../../.env'
var consts = {}
if (env.ambient == 'dev') {
    consts = {
        API_URL: 'http://localhost:3004/api',
        IGAPI_URL: 'http://localhost:3004/ig',
        OAPI_URL: 'http://localhost:3004',
        ADMIN_URL: 'http://localhost:3004/admin',
    }

} else {
    consts = {
        API_URL: 'https://fgslapi.pedrogyn.com.br',
        API_URL_ASSETS: 'https://fgslassets.pedrogyn.com.br',

        // API_URL: 'http://localhost:3025',
        // API_URL_ASSETS: 'http://localhost:3026',
    }
}

export default consts 