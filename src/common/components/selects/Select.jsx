import React, { Component } from 'react'
import { Select as S, Slider } from 'antd';
import Item from '../../../../node_modules/antd/lib/list/Item';
const Option = S.Option;



class Select extends Component {
    childrens(values, value, description){
        const children = []
        for(var index = 0; index < values.length; index++){
            children.push(<Option key={values[index][value]}>{values[index][description]}</Option>);
        }
        return children
    }
    render() {
        return (
            <div>
                <div className='form-group'>
                    <label>{this.props.label}</label>
                    <S
                        defaultValue={this.props.selectValues}
                        onChange={this.props.SelectOnChange}
                        style={{ width: '100%' }}
                    >
                        {this.childrens(this.props.values, this.props.value, this.props.description)}
                    </S>
                </div>
            </div>
        )
    }
}

export default Select