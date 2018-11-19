import React, { Component } from 'react'
import { Select, Slider } from 'antd';
const Option = Select.Option;



class MultiSelect extends Component {
    childrens(values){
        const children = []

        for (let child of values) {
            children.push(<Option key={child}>{child}</Option>);
        }

        return children
    }
    render() {
        
        return (
            <div>
                <div className='form-group'>
                    <label>{this.props.label}</label>
                    <Select
                        mode={this.props.mode ? this.props.mode : "multiple"}
                        defaultValue={this.props.selectValues}
                        onChange={this.props.SelectOnChange}
                        style={{ width: '100%' }}
                    >
                        {this.childrens(this.props.values)}
                    </Select>
                </div>
            </div>
        )
    }
}

export default MultiSelect