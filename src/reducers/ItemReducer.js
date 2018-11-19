const INITIAL_STATE = {
    activeItem: 'calendario',
    treeItem: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ACTIVE_ITEM':
            return { ...state, activeItem: action.payload.activeItem, treeItem: action.payload.treeItem }
        default:
            return state
    }
}