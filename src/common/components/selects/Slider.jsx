import React from 'react'
import swal from 'sweetalert'
import { Slider as SliderAntd, Select } from 'antd';
const Option = Select.Option;

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

var inicial = 0
var final = 23

function setValorInicial(value) {
    if (value > final) {
        swal("", "O horario inicial deve ser menor que o final", "warning")
        return inicial
    } else {
        inicial = value
        return value
    }
}

function setValorFinal(value) {
    if (value < inicial) {
        swal("", "O horario final deve ser maior que o inicial", "warning")
        return final
    } else {
        final = value
        return value
    }
}

const Slider = props => (
    <div>
        {/* <SliderAntd tipFormatter={formatter} marks={marks} range min={0} max={23} step={1} onChange={props.SliderOnChange} /> */}
        <div className='form-group col col-md-12'>
            <label>Horário inicial: </label>
            <Select defaultValue={inicial} value={inicial} onSelect={(value) => { props.SliderOnChange([setValorInicial(value), final]) }} style={{ width: '100%' }}>
                <Option value={0}>00:00</Option>
                <Option value={1}>01:00</Option>
                <Option value={2}>02:00</Option>
                <Option value={3}>03:00</Option>
                <Option value={4}>04:00</Option>
                <Option value={5}>05:00</Option>
                <Option value={6}>06:00</Option>
                <Option value={7}>07:00</Option>
                <Option value={8}>08:00</Option>
                <Option value={9}>09:00</Option>
                <Option value={10}>10:00</Option>
                <Option value={11}>11:00</Option>
                <Option value={12}>12:00</Option>
                <Option value={13}>13:00</Option>
                <Option value={14}>14:00</Option>
                <Option value={15}>15:00</Option>
                <Option value={16}>16:00</Option>
                <Option value={17}>17:00</Option>
                <Option value={18}>18:00</Option>
                <Option value={19}>19:00</Option>
                <Option value={20}>20:00</Option>
                <Option value={21}>21:00</Option>
                <Option value={22}>22:00</Option>
                <Option value={23}>23:00</Option>
            </Select>
        </div>
        <div className='form-group col col-md-12'>
            <label>Horário final: </label>
            <Select defaultValue={final} value={final} onSelect={(value) => { props.SliderOnChange([inicial, setValorFinal(value)]) }} style={{ width: '100%' }}>
                <Option value={0}>00:00</Option>
                <Option value={1}>01:00</Option>
                <Option value={2}>02:00</Option>
                <Option value={3}>03:00</Option>
                <Option value={4}>04:00</Option>
                <Option value={5}>05:00</Option>
                <Option value={6}>06:00</Option>
                <Option value={7}>07:00</Option>
                <Option value={8}>08:00</Option>
                <Option value={9}>09:00</Option>
                <Option value={10}>10:00</Option>
                <Option value={11}>11:00</Option>
                <Option value={12}>12:00</Option>
                <Option value={13}>13:00</Option>
                <Option value={14}>14:00</Option>
                <Option value={15}>15:00</Option>
                <Option value={16}>16:00</Option>
                <Option value={17}>17:00</Option>
                <Option value={18}>18:00</Option>
                <Option value={19}>19:00</Option>
                <Option value={20}>20:00</Option>
                <Option value={21}>21:00</Option>
                <Option value={22}>22:00</Option>
                <Option value={23}>23:00</Option>
            </Select>
        </div>
    </div>
)

export default Slider