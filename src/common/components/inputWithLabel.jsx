import React, { Component } from 'react'

class InputWithLabel extends Component {

    render() {
        return (
            <div className="form-group">
                <label className="col-sm-3">{this.props.label}</label>
                <div className="col-sm-9">
                    <input {...this.props.input} readOnly={this.props.readOnly} disabled={this.props.disabled}ref={this.props.ref} type="text" className="form-control" placeholder={this.props.placeholder}/>
                </div>
            </div>
        )
    }
}

export default InputWithLabel