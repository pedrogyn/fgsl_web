import React, { Component } from 'react'
import { Input, Icon } from 'antd';

class MultiInputs extends Component {
    render() {
        return (
            <div>
                <div className='form-group'>
                    <label>{this.props.label}</label>
                    {/* <button onClick={()=>{this.props.addValue()}} className='btn btn-primary btn-xs pull-right btn-rounded'><i className='fa fa-plus'></i></button> */}
                    {
                        this.props.values.map((item, index) => (
                            <div className='form-group' key={index}>
                                <Input value={item} onChange={(event) => { this.props.onChange(event, index) }} style={{ width: '100%', marginRight: 8, marginBottom: 6 }} />
                                <button onClick={() => { this.props.removeValue(index) }} className='btn btn-danger'>Remover</button>
                            </div>
                        ))
                    }
                    <button onClick={() => { this.props.addValue() }} className='btn btn-primary btn-block'>Adicionar</button>
                </div>
            </div>
        )
    }
}

export default MultiInputs