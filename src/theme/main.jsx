import React, { Component } from 'react'
import axios from 'axios'
import { hashHistory } from 'react-router'
import Progress from './progress'
import Navigation from './navigation'
import TopHeader from './topHeader'
import Footer from './footer'

import Messages from '../common/components/messages'
import { correctHeight, detectBody } from './helpers/helpers'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setActiveItem } from '../actions/itemActions'

import './assets/dependencies'

import Routes from '../main/routes'

class Main extends Component {

    constructor() {
        super()
        this.state = {
            enter: false, width: 0, height: 0, carregando: true
        }

        setTimeout(() => {
            this.setState({ carregando: false })
        }, 2000)

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentWillMount() {

        if (this.props.router.location.pathname == '/') {
            this.props.setActiveItem({ activeItem: 'eventos', treeItem: '' })
        } else {
            const pathname = this.props.router.location.pathname.split('/')
            if (pathname.length == 2) {
                this.props.setActiveItem({ activeItem: pathname[1], treeItem: '' })
            } else if (pathname.length == 3) {
                this.props.setActiveItem({ activeItem: pathname[2], treeItem: pathname[1] })
            }
        }
    }

    componentDidMount() {

        $(window).bind("load resize", function () {
            correctHeight();
            detectBody();
        });

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {

        if (this.state.carregando == true) {
            return (
                <div >
                    <div className="sk-loading" style={{ height: this.state.height }}>
                        <div className="sk-spinner sk-spinner-double-bounce" style={{ marginLeft: 'auto', marginTop: this.state.height / 2 }}>
                            <div className="sk-double-bounce1"></div>
                            <div className="sk-double-bounce2"></div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            {/* <h2 style={{color: 'white'}}>Seja bem à Fundii.</h2> */}
                            <h2 style={{ color: 'rgba(255,255,255,0.3)' }}>Carregando...</h2>
                        </div>
                    </div>
                </div>

            )
        }
        return (
            <div id="wrapper">
                <Progress />
                <Navigation />
                <div id="page-wrapper" className="gray-bg">
                    <TopHeader />
                    {/* <Routes /> */}
                    {
                        this.props.children
                    }
                    <Footer />
                </div>
                <Messages />
            </div>

        )
    }
}

const mapStateToProps = state => ({ AuthReducer: state.AuthReducer })
const mapDispatchToProps = dispatch => bindActionCreators({
    setActiveItem
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Main)

// export default Main