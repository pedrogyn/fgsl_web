import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form'
import { reducer as ToastrReducer } from 'react-redux-toastr'

import menuReducer from './MenuReducer'
import ItemReducer from './ItemReducer'

import AuthReducer from './AuthReducer'
import EventosReducer from './EventosReducer'

export default combineReducers({
    EventosReducer,
    AuthReducer,
    ItemReducer,
    menu: menuReducer,
    form: FormReducer,
    toastr: ToastrReducer
});