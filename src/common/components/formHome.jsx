import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import input from './input'

class FormHome extends Component {

    constructor() {
        super()
        this.state = {
            value: 'asdfsadf'
        }
    }

    

    render() {
        const { handleSubmit } = this.props

        

        return (

            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nomeCompleto' component={input} label='Nome' placeholder='Informe o seu nome completo'/>
                    <Field name='email' component={input} label='E-mail'  placeholder='Informe o seu email'/>
                    <Field name='cpf' component={input} label='CPF'  placeholder='Informe o seu CPF'/>
                    <Field name='telefone' component={input} label='Telefone'  placeholder='Informe o seu telefone'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'formHome' })(FormHome)