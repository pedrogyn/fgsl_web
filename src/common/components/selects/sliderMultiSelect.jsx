import React from 'react'
import { Select, Slider } from 'antd';
const Option = Select.Option;

const values = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
const children = []

for (let day of values) {
    children.push(<Option key={day}>{day}</Option>);
}

const marks = {
    0: '00:00',
    23: '23:00'
};

function formatter(value) {
    if (value < 10) {
        return `0${value}:00`
    } else {
        return `${value}:00`;
    }
}

const SliderMultiSelect = props => (
    <div>
        <div className='form-group'>
            <label>Escolha os dias da semana</label>
            <button onClick={props.buttonClick} className='btn btn-danger btn-xs pull-right btn-rounded'><i className='fa fa-close'></i></button>                        
            <Select
                mode="multiple"
                defaultValue={props.selectValues}
                onChange={props.SelectOnChange}
                style={{ width: '100%' }}
            >
                {children}
            </Select>
        </div>
        <div className='form-group'>
            <label>Escolha o intervalo de atendimento</label>
            <div className='form-group col col-md-12'>
                <Slider tipFormatter={formatter} marks={marks} range min={0} max={23} step={1} defaultValue={props.sliderDefaultValue} onChange={props.SliderOnChange} />
            </div>
        </div>
        <div className="hr-line-dashed"></div>

    </div>
)

export default SliderMultiSelect