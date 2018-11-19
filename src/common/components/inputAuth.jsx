import React, { Component } from 'react'
import VMasker from 'vanilla-masker'

class Input extends Component {

    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    setMask(mask, value) {

        value = VMasker.toPattern(value, mask);

        this.setState({ value })
    }

    render() {
        return (
            <div className="form-group has-feedback">
                <input {...this.props.input} onKeyPress={(event) =>{if(event.key === 'Enter'){event.preventDefault()}}} onKeyDown={this.props.onKeyDown} onChange={(event) => { this.props.mask ? this.setMask(this.props.mask, event.target.value) : this.setState({ value: event.target.value }) }} value={this.state.value} className='form-control' placeholder={this.props.placeholder} readOnly={this.props.readOnly} type={this.props.type} />
                <span className={`glyphicon glyphicon-${this.props.icon} form-control-feedback`}></span>
                {this.props.meta.touched &&
                    ((this.props.meta.error && <span>{this.props.meta.error}</span>) ||
                        (this.props.meta.warning && <span>{this.props.meta.warning}</span>))}
            </div>
        )
    }
}

export class InputLogin extends Component {

    render() {
        return (
            <div className="form-group has-feedback">
                <input {...this.props.input} onKeyPress={(event) =>{if(event.key === 'Enter'){event.preventDefault()}}} onKeyDown={this.props.onKeyDown} className='form-control' placeholder={this.props.placeholder} readOnly={this.props.readOnly} type={this.props.type} />
                <span className={`glyphicon glyphicon-${this.props.icon} form-control-feedback`}></span>
                {this.props.meta.touched &&
                    ((this.props.meta.error && <span>{this.props.meta.error}</span>) ||
                        (this.props.meta.warning && <span>{this.props.meta.warning}</span>))}
            </div>
        )
    }
}

export default Input