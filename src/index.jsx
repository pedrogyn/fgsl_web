import React from 'react'
import ReactDOM from 'react-dom'

import { LocaleProvider } from 'antd'
import ptBR from 'antd/lib/locale-provider/pt_BR'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './reducers'
import Main from './theme/main'
import Routes from './main/routes'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

ReactDOM.render (
    <LocaleProvider locale={ptBR}>
        <Provider store={store}>
            {/* <Main /> */}
            <Routes />
        </Provider>
     </LocaleProvider>, 
    document.getElementById('app'))