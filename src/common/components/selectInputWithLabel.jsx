import React, { Component } from 'react'
import { Select } from 'antd';
const Option = Select.Option;

class SelectInputWithLabel extends Component {

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
                    <Select {...this.props.input} style={{ width: '100%' }}>
                        {this.renderOptions(this.props.options || [{value: 'Selecione um valor', description: 'Selecione um valor'}])}
                    </Select>
                </div>
            </div>
        )
    }
}

export default SelectInputWithLabel