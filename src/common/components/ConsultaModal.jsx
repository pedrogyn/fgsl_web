import React, { Component } from 'react'

import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const reader = new FileReader();

var crypto = require('crypto');
import moment from 'moment'
import VMasker from 'vanilla-masker'

moment.locale('pt-BR')

class ConsultaModal extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            value: null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            $(`div.${this.props.classNameOfItem}`).attr('data-toggle', `${this.props.dataToggle}`);
            $(`div.${this.props.classNameOfItem}`).attr('data-dismiss', `${this.props.dataToggle}`);
            $(`div.${this.props.classNameOfItem}`).attr('data-target', `#${this.props.id}`);
        }, 2000)
    }

    tipoPagamento(tipo){
        if(tipo == 'ted'){
            return 'Transferência'
        }
        if(tipo == 'boleto'){
            return 'Boleto'
        }
        if(tipo == 'credit'){
            return 'Cartão'
        }
    }


    render() {
        const consulta = this.props.consulta;
        var paciente = null
        var psicologo = null
        var pagamento = null
        if (consulta) {
            paciente = consulta._userId;
            psicologo = consulta._psicologoId._userId;
            pagamento = consulta._pagamentoId;
        }
        return (
            <div className="modal fade" id={`${this.props.id}`} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body">
                            <div className='row'>

                                <div className='ibox float-e-margins'>
                                    <div className="ibox-title">
                                        <button type="button" className="close" data-dismiss={`${this.props.dataToggle}`}>&times;</button>
                                        <h5>{this.props.header}</h5>
                                    </div>

                                    <div className='ibox-content'>
                                        {
                                            consulta &&
                                            <div>
                                                <div className='col col-md-6 col-sm-12 col-xs-12'>
                                                    <div className="widget-head-color-box navy-bg p-lg text-center">
                                                        <div className="m-b-md">
                                                            <h2 className="font-bold no-margins">{paciente.first_name} </h2>
                                                        </div>
                                                        <img style={{ maxWidth: 160, minWidth: 160, maxHeight: 160, minHeight: 160 }} src={paciente.profileImage ? `https://tadassets.pedrogyn.com.br/images/${paciente.profileImage}` : `https://www.gravatar.com/avatar/${crypto.createHash('md5').update(paciente.email).digest("hex")}?d=mm`} className="img-circle circle-border m-b-md" alt="profile" />
                                                    </div>
                                                    <div className="widget-text-box" style={{ minHeight: this.state.height }}>
                                                        <label><h3>Informações</h3></label>
                                                        <p><label>Email:</label> {paciente.email}</p>
                                                        {paciente.cel_phone && <p><label>Telefone:</label> {VMasker.toPattern(paciente.cel_phone, '(99)99999-9999')}</p>}
                                                    </div>
                                                </div>
                                                <div className='col col-md-6 col-sm-12 col-xs-12'>
                                                    <div className="widget-head-color-box navy-bg p-lg text-center">
                                                        <div className="m-b-md">
                                                            <h2 className="font-bold no-margins">{psicologo.first_name} </h2>
                                                        </div>
                                                        <img style={{ maxWidth: 160, minWidth: 160, maxHeight: 160, minHeight: 160 }} src={psicologo.profileImage ? `https://tadassets.pedrogyn.com.br/images/${psicologo.profileImage}` : `https://www.gravatar.com/avatar/${crypto.createHash('md5').update(psicologo.email).digest("hex")}?d=mm`} className="img-circle circle-border m-b-md" alt="profile" />
                                                    </div>
                                                    <div className="widget-text-box" style={{ minHeight: this.state.height }}>
                                                        <label><h3>Informações</h3></label>
                                                        <p><label>Email:</label> {psicologo.email}</p>
                                                        {psicologo.cel_phone && <p><label>Telefone:</label> {VMasker.toPattern(psicologo.cel_phone, '(99)99999-9999')}</p>}
                                                    </div>
                                                </div>
                                                <div className='col col-md-12 ' style={{ marginTop: 10, marginBottom: 10 }}>
                                                    <p style={{ textAlign: 'center' }}><label>- - - - - - - - - - - - - - - - - - - - - -</label></p>
                                                </div>
                                                <div className='col col-md-12 '>
                                                    <p>  </p>
                                                    <p><label>Data da consulta:</label> {moment(consulta.dataConsulta).format('DD/MM/YYYY - HH:mm')}</p>
                                                    <p><label>Status da consulta:</label> {String(consulta.status)}</p>
                                                    <p><label>Status do pagamento:</label> {String(pagamento.status)}</p>
                                                    <p><label>Tipo da consulta:</label> {pagamento.tipoConsulta == 'individual' ? 'Individual' : 'Plano mensal'}</p>
                                                    <p><label>Forma de pagamento:</label> {this.tipoPagamento(pagamento.payment_method)}</p>
                                                </div>
                                            </div>
                                        }
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-info" data-dismiss={`${this.props.dataToggle}`}>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConsultaModal
