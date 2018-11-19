import React, { Component } from 'react'
import { Link } from 'react-router'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setActiveItem } from '../actions/itemActions'

class MenuItem extends Component {

    constructor() {
        super()
        this.state = {
            active: false
        }
    }



    render() {
        return (

            // <li><a href="form_file_upload.html"> <i className={`fa fa-user`}></i>File Upload</a></li>
            <li className={this.props.ItemReducer.activeItem == this.props.path ? 'active' : ''} onClick={() => {  this.props.setActiveItem({activeItem: this.props.path, treeItem: ''}) }}>
                <Link to={this.props.path}>
                    <i className={`fa fa-${this.props.icon}`}></i> <span className="nav-label">{this.props.title}</span>
                </Link>
            </li>
        )
    }
}

const mapStateToProps = state => ({
    HomeReducer: state.HomeReducer,
    ItemReducer: state.ItemReducer
})
const mapDispatchToProps = dispatch => bindActionCreators({ setActiveItem }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)