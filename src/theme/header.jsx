import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
    render() {
        return (
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-sm-6">
                    <h2>{this.props.title}</h2>
                    <ol className="breadcrumb">
                        <li>
                            <Link path="/">Eventos</Link>
                        </li>
                        {
                            this.props.segundoNivel &&
                            <li>
                                <Link path="/">{this.props.segundoNivel}</Link>
                            </li>
                        }
                        <li className="active">
                            <strong>{this.props.title}</strong>
                        </li>
                    </ol>
                </div>
                <div className="col-sm-6">
                    <div className="title-action">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}