import React, { Component } from 'react'
import { Input } from 'antd';
const { TextArea } = Input

class TextAreaInput extends Component {
    render() {
        return (
            <div>
                <div className='form-group'>
                    <label>{this.props.label}</label>
                    <TextArea value={this.props.value} rows={4} onChange={(event) => { this.props.onChange(event.target.value) }} />
                </div>
            </div>
        )
    }
}

export default TextAreaInput