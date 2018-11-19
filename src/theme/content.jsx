import React, { Component } from 'react'

export default class Content extends Component {

    componentDidMount() {
        if (this.props.whiteBg) {
            $('#page-wrapper').removeClass('gray-bg')
            $('#page-wrapper').addClass('white-bg')
        } else {
            $('#page-wrapper').removeClass('white-bg')
            $('#page-wrapper').addClass('gray-bg')
        }
    }

    render() {
        return (
            <div className={`wrapper wrapper-content animated fadeIn ${this.props.whiteBg ? 'white-bg' : ''}`}>
                {this.props.children}
            </div>
        )
    }
}