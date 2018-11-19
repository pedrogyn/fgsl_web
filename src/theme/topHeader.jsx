import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { collapseMenu } from '../actions/menuActions'

import { Select } from 'antd'
const Option = Select.Option

class TopHeader extends Component {
    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">

                        <a className="navbar-minimalize minimalize-styl-2 btn btn-primary" onClick={() => this.props.collapseMenu()}><i className="fa fa-bars"></i> </a>
                        {/* <form role="search" className="navbar-form-custom" method="post" action="#">
                            <div className="form-group">
                                <input type="text" placeholder="Faça sua pesquisa..." className="form-control" name="top-search" id="top-search" />
                            </div>
                        </form> */}


                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        {/* <li>
                            <a onClick={() => { this.props.logout() }}>
                                <i className="fa fa-sign-out"></i> Sair
                            </a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => ({ AuthReducer: state.AuthReducer })
const mapDispatchToProps = dispatch => bindActionCreators({ collapseMenu }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TopHeader)