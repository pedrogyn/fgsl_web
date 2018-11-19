import React, { Component } from 'react'
import { Select } from 'antd';
const Option = Select.Option;

class TextAreaWithLabel extends Component {

    renderOptions(options){
        return options.map((item, index) =>(
            <Option key={index} value={item.value}>{item.description}</Option>
        ))
    }

    render() {
        return (
            <div className="form-group">
                <label className="col-sm-3">{this.props.label}</label>
                <div className="col-sm-9">
                    <textarea {...this.props.input} maxLength={500} className="form-control" disabled={this.props.disabled}ref={this.props.ref} type="text" placeholder={this.props.placeholder} rows="10" cols="50">{this.props.label}</textarea>
                </div>
            </div>
        )
    }
}

export default TextAreaWithLabel