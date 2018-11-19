import React, { Component } from 'react'
import { Link } from 'react-router'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setActiveItem } from '../actions/itemActions'



class MenuTree extends Component {

    constructor() {
        super()
        this.state = {
            active: false
        }
    }

    onClick(){
        if(this.props.ItemReducer.treeItem == this.props.tree){
            this.props.setActiveItem({activeItem: '', treeItem: ''})
        } else {
            this.props.setActiveItem({activeItem: '', treeItem: this.props.tree})
        }
    }

    /**
     *  ${this.props.ItemReducer.activeItem.split('/')[0] == this.props.path.split('/')[0] ? 'active' : ''}
     */
    render() {
        return (
            <li className={`${this.props.ItemReducer.treeItem == this.props.tree ? 'active' : ''} `} onClick={() => { this.onClick() }}>
                <a ><i className={`fa fa-${this.props.icon}`}></i> <span className="nav-label">{this.props.title}</span> <span className="fa arrow"></span></a>
                <ul className={`nav nav-second-level collapse ${this.props.ItemReducer.treeItem == this.props.tree ? 'in' : ''}`}>
                    {this.props.children}
                </ul>
            </li>
        )
    }
}


const mapStateToProps = state => ({
    HomeReducer: state.HomeReducer,
    ItemReducer: state.ItemReducer
})
const mapDispatchToProps = dispatch => bindActionCreators({ setActiveItem }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MenuTree)