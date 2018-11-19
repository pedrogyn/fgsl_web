import React, { Component } from 'react'
import { Link } from 'react-router'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setActiveItem } from '../actions/itemActions'

class MenuTreeItem extends Component {

    constructor() {
        super()
        this.state = {
            active: false
        }
    }

    render() {
        return (
            <li className={this.props.ItemReducer.activeItem == this.props.path ? 'active' : ''} >
                <a href={`/#/${this.props.path}`}>
                    {this.props.title} 
                </a>
            </li>
        )
    }
}

const mapStateToProps = state => ({
    HomeReducer: state.HomeReducer,
    ItemReducer: state.ItemReducer
})
const mapDispatchToProps = dispatch => bindActionCreators({ setActiveItem }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MenuTreeItem)