const INITIAL_STATE = {
    collapsed: false,
    activeItem: 'home'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'COLLAPSE_MENU':
            return { ...state, collapsed: action.payload }
        default:
            return state
    }
}