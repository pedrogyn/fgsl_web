import React from 'react'

export default props => (
    <div className='form-group'>
        <label htmlFor={props.name}>{props.label}</label>
        <input
            {...props.input}
            className='form-control'
            type={props.type}
            readOnly={props.readOnly}
            placeholder={props.placeholder}
        />
    </div>
)