import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { validateToken } from '../actions/AuthActions'

import Messages from '../common/components/messages'

class App extends Component {

    componentWillMount() {
        this.props.validateToken(this.props.AuthReducer.token)
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='content-wrapper'>
                    {this.props.children}
                </div>
                <Messages />
            </div>
        )

    }
}

const mapStateToProps = state => ({ AuthReducer: state.AuthReducer })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)