const INITIAL_STATE = {
    eventos: [],
    _id: '',
    name: '',
    subject: '',
    speaker: '',
    bio: '',
    schedule: '',
    room: 'sala',
    asset: '',

    eventoSelecionado: null
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_EVENTOS':
            return { ...state, eventos: action.payload }
        case 'SET_EVENTO_SELECIONADO':
            return { ...state, eventoSelecionado: action.payload }
        case 'SET_ID':
            return { ...state, _id: action.payload }
        case 'SET_NAME':
            return { ...state, name: action.payload }
        case 'SET_SUBJECT':
            return { ...state, subject: action.payload }
        case 'SET_SPEAKER':
            return { ...state, speaker: action.payload }
        case 'SET_BIO':
            return { ...state, bio: action.payload }
        case 'SET_SCHEDULE':
            return { ...state, schedule: action.payload }
        case 'SET_ROOM':
            return { ...state, room: action.payload }
        case 'SET_ASSET':
            return { ...state, asset: action.payload }
        default:
            return state
    }
}
