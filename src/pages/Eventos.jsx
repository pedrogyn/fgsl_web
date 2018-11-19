import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import axios from 'axios'

import moment from "moment";
moment.locale('pt-BR')

import { DatePicker } from 'antd';

import Header from '../theme/header'
import Content from '../theme/content'
import Profile from '../common/components/Profile';

import { getEventos, setReducerItem, salvarEvento, removerEvento } from '../actions/EventosActions'

class Eventos extends Component {

    componentDidMount() {
        this.props.getEventos()
    }

    render() {
        let { eventos, name, subject, speaker, bio, schedule, room } = this.props.EventosReducer
        return (
            <div>
                <Header title='Eventos'>
                    <button className='btn btn-primary' type="button" data-toggle="modal" data-target="#myModal" >Adicionar Evento</button>
                </Header>
                <Content>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Palestra</th>
                                    <th scope="col">Assunto</th>
                                    <th scope="col">Palestrante</th>
                                    <th scope="col">Horário</th>
                                    <th scope="col">Local</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    eventos.length > 0 ?

                                        eventos.map((item, index) => {

                                            let { name, subject, speaker, schedule, bio, room } = item

                                            return (
                                                <tr key={index}>
                                                    <td style={{ minWidth: 180 }}>
                                                        <p>{name}</p>
                                                    </td>
                                                    <td style={{ maxWidth: 480 }}>
                                                        <p>{subject}</p>
                                                    </td>
                                                    <td>
                                                        <p>{speaker}</p>
                                                    </td>
                                                    <td>
                                                        <p>{moment(schedule).format('DD/MM/YYYY - HH:mm')}</p>
                                                    </td>
                                                    <td>
                                                        <p>{room}</p>
                                                    </td>
                                                    <td>
                                                        <a onClick={()=>{this.props.removerEvento(item._id)}} className="btn btn-danger btn-xs">Remover</a>
                                                    </td>
                                                </tr>
                                            )
                                        })

                                        :

                                        <tr>
                                            <td colSpan={5}><h3>Sem eventos cadastrados</h3></td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>


                    { /** modal */}

                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Adicionar Evento</h4>
                                </div>

                                <div className="modal-body">

                                    <div className="form-group row"><label className="col-sm-2 col-form-label">Palestra</label>
                                        <div className="col-sm-10">
                                            <input value={name} onChange={(event) => { this.props.setReducerItem('SET_NAME', event.target.value) }} type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row"><label className="col-sm-2 col-form-label">Assunto</label>
                                        <div className="col-sm-10">
                                            <input value={subject} onChange={(event) => { this.props.setReducerItem('SET_SUBJECT', event.target.value) }} type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row"><label className="col-sm-2 col-form-label">Palestrante</label>
                                        <div className="col-sm-10">
                                            <input value={speaker} onChange={(event) => { this.props.setReducerItem('SET_SPEAKER', event.target.value) }} type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row"><label className="col-sm-2 col-form-label">Biografia</label>
                                        <div className="col-sm-10">
                                            <input value={bio} onChange={(event) => { this.props.setReducerItem('SET_BIO', event.target.value) }} type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row"><label className="col-sm-2 col-form-label">Dia e Horário</label>
                                        <div className="col-sm-10">
                                            <DatePicker
                                                showTime
                                                
                                                style={{ width: '100%' }}
                                                format="YYYY-MM-DD HH:mm:ss"
                                                popupStyle={{zIndex: 10000}}
                                                placeholder="Selecione o dia e o horário da palestra"
                                                onOpenChange={(value) => { setTimeout(() => { $('.ant-calendar-time-picker-btn').text('Selecionar horário') }, 100) }}
                                                onChange={(value) => { this.props.setReducerItem('SET_SCHEDULE', moment(value).toISOString()) }}
                                                onOk={(value) => { this.props.setReducerItem('SET_SCHEDULE', moment(value).toISOString()) }}
                                            />
                                            {/* <input value={schedule} onChange={(event) => { this.props.setReducerItem('SET_SCHEDULE', event.target.value) }} type="text" className="form-control" /> */}
                                        </div>
                                    </div>
                                    <div className="form-group row"><label className="col-sm-2 col-form-label">Local</label>
                                        <div className="col-sm-10">
                                            <select value={room} placeholder="Selecione uma sala" onChange={(event) => { this.props.setReducerItem('SET_ROOM', event.target.value) }} type="text" className="form-control" >
                                                <option value="sala" disabled>Selecione uma sala</option>
                                                <option value='Pátio do IFG'>Pátio do IFG</option>
                                                <option value='Teatro do IFG'>Teatro do IFG</option>
                                                <option value='Mini Auditório Demartin Bezerra'>Mini Auditório Demartin Bezerra</option>
                                                <option value='Sala 1 (Cinemateca)'>Sala 1 (Cinemateca)</option>
                                                <option value='Sala 2 (Auditório Julieta Passos)'>Sala 2 (Auditório Julieta Passos)</option>
                                                <option value='Sala 3 (Auditório Djalma Araújo)'>Sala 3 (Auditório Djalma Araújo)</option>
                                                <option value='Sala 4 (S-306)'>Sala 4 (S-306)</option>
                                                <option value='LPIC (S-308)'>LPIC (S-308)</option>
                                                <option value='CTF (S-301)'>CTF (S-301)</option>
                                                <option value='Laboratório 1 (S-401A)'>Laboratório 1 (S-401A)</option>
                                                <option value='Laboratório 2 (S-401B)'>Laboratório 2 (S-401B)</option>
                                                <option value='Laboratório 3 (S-401C)'>Laboratório 3 (S-401C)</option>
                                                <option value='Laboratório 4 (S-309)'>Laboratório 4 (S-309)</option>
                                                <option value='Laboratório 5 (S-310)'>Laboratório 5 (S-310)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.salvarEvento() }}>Salvar</button>
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    AuthReducer: state.AuthReducer,
    EventosReducer: state.EventosReducer
})
const mapDispatchToProps = {
    getEventos, setReducerItem, salvarEvento, removerEvento
}
export default connect(mapStateToProps, mapDispatchToProps)(Eventos)