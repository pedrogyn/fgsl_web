const userKey = '_8020_user'
const usuario = JSON.parse(localStorage.getItem(userKey))
const INITIAL_STATE = {
    token: usuario ? usuario.token : null,
    validToken: false,
    name: usuario ? usuario.name : 'Nome',
    email: usuario ? usuario.email : 'email@email',
    role: usuario ? usuario.role : 'user',
    profileImage: usuario ? usuario.profileImage : undefined
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED': if (action.payload) {
            return { ...state, validToken: true }
        } else {
            localStorage.removeItem(userKey)
            return { ...state, validToken: false, token: null }
        }
        case 'USER_FETCHED':
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, token: action.payload.token, validToken: true, name: action.payload.name, email: action.payload.email, role: action.payload.role, profileImage: action.payload.profileImage, instagramAccounts: action.payload.instagramAccounts ? action.payload.instagramAccounts : [] }
        case 'SET_PROFILE_IMAGE':
            return { ...state, profileImage: action.payload }
        default:
            return state
    }
}
