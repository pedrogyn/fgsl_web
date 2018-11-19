import React, { Component } from 'react'
import { Select } from 'antd';
const Option = Select.Option;

class InputButtonWithLabel extends Component {

    render() {
        return (
            <div className="form-group">
                <label className="col-sm-3">{this.props.label}</label>
                <div className="col-sm-9">
                    <div className="input-group">

                        <input readOnly={true} type="text" className="form-control" contentEditable={false} value={this.props.value} />
                        <span className="input-group-btn">

                            <label className="btn btn-primary">
                                {this.props.buttonLabel}
                                <input onChange={this.props.onChange} type="file" accept=".png, .jpg, .jpeg, .JPG, .JPEG, .PNG" style={{ display: "none" }} />
                            </label>
                            {/* <button type="button" className="btn btn-primary" ref={this.inputfile} onClick={this.props.onClick}>


                                {this.props.buttonLabel}
                                <input {...this.props.input} type="file" ref={(input) => this.inputfile = input} style={{ display: 'none' }} className="form-control" disabled={this.props.disabled} />
                            </button> */}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputButtonWithLabel