import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { Menu, Icon } from 'antd'
var crypto = require('crypto');
const SubMenu = Menu.SubMenu

import { smoothlyMenu } from './helpers/helpers'
import MenuTree from './menuTree';
import MenuItem from './menuItem';
import MenuTreeItem from './menuTreeItem';

class Navigation extends Component {

    constructor() {
        super()
        this.state = {
            col: false
        }
    }

    componentWillUpdate(nextProps, nextState) {
        $("body").toggleClass("mini-navbar")
        smoothlyMenu()
    }

    render() {
        let { email, name, profileImage } = this.props.AuthReducer
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        {/* {this.menuHeader(email, name)} */}
                        <li className="nav-header">
                            <div className="dropdown profile-element">
                                <span>
                                    {/* <img alt="image" width={48} className="img-circle" src={profileImage ? `https://tadassets.pedrogyn.com.br/images/${profileImage}` : `https://www.gravatar.com/avatar/${crypto.createHash('md5').update(email).digest("hex")}?d=mm`}></img> */}
                                </span>
                                <a data-toggle="dropdown" className="dropdown-toggle">
                                    <span className="clear">
                                        <span className="block m-t-xs">
                                            <strong className="font-bold">XV FGSL</strong>
                                        </span>
                                        {/* <span className="text-muted text-xs block"> {email}</span> */}
                                    </span>
                                </a>
                            </div>
                            <div className="logo-element">
                                <strong><a className='fa fa-calendar' style={{ fontSize: 30 }}></a></strong>
                            </div>
                        </li>
                        <MenuItem icon='calendar' title='Eventos' path='eventos' />
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({ menu: state.menu, AuthReducer: state.AuthReducer })
export default connect(mapStateToProps, null)(Navigation)