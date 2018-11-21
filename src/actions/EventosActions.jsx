import axios from 'axios'
import swal from 'sweetalert'

import consts from '../common/helpers/consts'

let BASE_URL = consts.API_URL
let ASSET_URL = consts.API_URL_ASSETS

export const setReducerItem = (type, payload) =>
    dispatch => {
        dispatch({ type, payload })
    }

export const itemSelecionado = (item) =>
    dispatch => {

        if (item == null) {
            return dispatch([
                setReducerItem('SET_ID', ''),
                setReducerItem('SET_NAME', ''),
                setReducerItem('SET_SUBJECT', ''),
                setReducerItem('SET_SPEAKER', ''),
                setReducerItem('SET_BIO', ''),
                setReducerItem('SET_SCHEDULE', ''),
                setReducerItem('SET_ROOM', 'sala'),
                setReducerItem('SET_ASSET', '')
            ])
        }

        let { _id, name, subject, speaker, schedule, bio, room, asset } = item

        dispatch([
            setReducerItem('SET_ID', _id),
            setReducerItem('SET_NAME', name),
            setReducerItem('SET_SUBJECT', subject),
            setReducerItem('SET_SPEAKER', speaker),
            setReducerItem('SET_BIO', bio),
            setReducerItem('SET_SCHEDULE', schedule),
            setReducerItem('SET_ROOM', room),
            setReducerItem('SET_ASSET', asset)
        ])
    }

export const getEventos = () =>
    dispatch => {
        axios.get(`${BASE_URL}/event`)
            .then((response) => {
                console.log(response.data)
                dispatch({
                    type: 'SET_EVENTOS',
                    payload: response.data
                })
            })
            .catch((error) => {
                error = JSON.parse(JSON.stringify(error))
                console.log(error.response.data)
            })
    }

export const removerEvento = (_id) =>
    (dispatch, getState) => {
        axios.delete(`${BASE_URL}/event/${_id}`)
            .then((response) => {
                dispatch([getEventos()])
                swal("Eventos", "Evento removido com sucesso!!!", "success");
            })
            .catch((error) => {
                error = JSON.parse(JSON.stringify(error))
                swal("Eventos", "Houve um erro ao tentar remover o evento!!!", "error");
                console.log(error)
            })
    }

export const salvarEvento = () =>
    (dispatch, getState) => {
        let state = getState()
        let EventosReducer = state.EventosReducer
        let { name, subject, speaker, schedule, bio, asset, room, eventoSelecionado } = EventosReducer

        let data = {
            name,
            subject,
            speaker,
            bio,
            schedule,
            room
        }

        if (asset.name) {
            return salvarImagem(asset)
                .then((response) => {
                    data.asset = `${ASSET_URL}/images/${response}`
                    axios.post(`${BASE_URL}/event`, data)
                        .then((response) => {
                            dispatch([getEventos()])

                            dispatch([
                                setReducerItem('SET_NAME', ''),
                                setReducerItem('SET_SUBJECT', ''),
                                setReducerItem('SET_SPEAKER', ''),
                                setReducerItem('SET_BIO', ''),
                                setReducerItem('SET_SCHEDULE', ''),
                                setReducerItem('SET_ROOM', 'sala'),
                                setReducerItem('SET_ASSET', '')
                            ])

                            swal("Eventos", "Evento salvo com sucesso!!!", "success");
                            $('#myModal').modal('hide')
                        })
                        .catch((error) => {
                            error = JSON.parse(JSON.stringify(error))
                            swal("Eventos", "Houve um erro ao tentar salvar o evento!!!", "error");
                        })
                })
                .catch((error) => {
                    swal("Eventos", error, "error");
                })
        }

        axios.post(`${BASE_URL}/event`, data)
            .then((response) => {
                dispatch([getEventos()])

                dispatch([
                    setReducerItem('SET_NAME', ''),
                    setReducerItem('SET_SUBJECT', ''),
                    setReducerItem('SET_SPEAKER', ''),
                    setReducerItem('SET_BIO', ''),
                    setReducerItem('SET_SCHEDULE', ''),
                    setReducerItem('SET_ROOM', 'sala'),
                    setReducerItem('SET_ASSET', '')
                ])

                swal("Eventos", "Evento salvo com sucesso!!!", "success");
                $('#myModal').modal('hide')
            })
            .catch((error) => {
                error = JSON.parse(JSON.stringify(error))
                swal("Eventos", "Houve um erro ao tentar salvar o evento!!!", "error");
            })
    }

export const alterarEvento = () =>
    (dispatch, getState) => {
        let state = getState()
        let EventosReducer = state.EventosReducer
        let { _id, name, subject, speaker, schedule, bio, asset, room, eventoSelecionado } = EventosReducer

        let data = {
            _id,
            name,
            subject,
            speaker,
            bio,
            schedule,
            room
        }

        if (asset.name) {
            return salvarImagem(asset)
                .then((response) => {
                    data.asset = `${ASSET_URL}/images/${response}`
                    axios.put(`${BASE_URL}/event/${_id}`, data)
                        .then((response) => {
                            dispatch([getEventos()])

                            dispatch([
                                setReducerItem('SET_ID', ''),
                                setReducerItem('SET_NAME', ''),
                                setReducerItem('SET_SUBJECT', ''),
                                setReducerItem('SET_SPEAKER', ''),
                                setReducerItem('SET_BIO', ''),
                                setReducerItem('SET_SCHEDULE', ''),
                                setReducerItem('SET_ROOM', 'sala'),
                                setReducerItem('SET_ASSET', '')
                            ])

                            swal("Eventos", "Evento salvo com sucesso!!!", "success");
                            $('#modalEditar').modal('hide')
                        })
                        .catch((error) => {
                            error = JSON.parse(JSON.stringify(error))
                            swal("Eventos", "Houve um erro ao tentar salvar o evento!!!", "error");
                        })
                })
                .catch((error) => {
                    swal("Eventos", error, "error");
                })
        }

        axios.put(`${BASE_URL}/event/${_id}`, data)
            .then((response) => {
                dispatch([getEventos()])

                dispatch([
                    setReducerItem('SET_ID', ''),
                    setReducerItem('SET_NAME', ''),
                    setReducerItem('SET_SUBJECT', ''),
                    setReducerItem('SET_SPEAKER', ''),
                    setReducerItem('SET_BIO', ''),
                    setReducerItem('SET_SCHEDULE', ''),
                    setReducerItem('SET_ROOM', 'sala'),
                    setReducerItem('SET_ASSET', '')
                ])

                swal("Eventos", "Evento salvo com sucesso!!!", "success");
                $('#modalEditar').modal('hide')
            })
            .catch((error) => {
                error = JSON.parse(JSON.stringify(error))
                swal("Eventos", "Houve um erro ao tentar salvar o evento!!!", "error");
            })
    }

function salvarImagem(asset) {
    return new Promise((resolve, reject) => {
        var bodyFormData = new FormData();

        bodyFormData.append('profileImage', asset, asset.originalFileName);

        axios.post(`${ASSET_URL}/images/upload`, bodyFormData, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then((response) => {
                resolve(response.data.data.profileImage)
            })
            .catch(error => {
                error = JSON.parse(JSON.stringify(error))
                reject('Houve um erro ao enviar a imagem. Tente novamente');
            })
    })
}


