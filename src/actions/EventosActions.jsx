import axios from 'axios'
import swal from 'sweetalert'

import consts from '../common/helpers/consts'

let BASE_URL = consts.API_URL

export const setReducerItem = (type, payload) =>
    dispatch => {
        dispatch({ type, payload })
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
        let { name, subject, speaker, schedule, bio, room } = EventosReducer

        let data = {
            name,
            subject,
            speaker,
            bio,
            schedule,
            room
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
                    setReducerItem('SET_ROOM', 'sala')
                ])

                swal("Eventos", "Evento salvo com sucesso!!!", "success");
                $('#myModal').modal('hide')
            })
            .catch((error) => {
                error = JSON.parse(JSON.stringify(error))

                swal("Eventos", "Houve um erro ao tentar salvar o evento!!!", "error");
                console.log(error)
            })
    }