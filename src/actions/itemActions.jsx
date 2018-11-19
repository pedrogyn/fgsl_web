export function setActiveItem(value) {
    return (dispatch, getState) => {
        dispatch({
            type: 'ACTIVE_ITEM',
            payload: value
        })
    }
}