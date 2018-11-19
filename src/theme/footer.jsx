import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            // <div className="footer">
            //     <div style={{marginBottom: -10}}>
            //         <strong> <a href='https://terapiaadistancia.com.br'>Terapia a distância</a></strong>
            //         <a href='https://terapiaadistancia.com.br'><img src="https://res.cloudinary.com/pedrogyn/image/upload/v1525888744/Icone.png" alt="icone" className='pull-right' style={{height: 20}}/> </a>
            //     </div>
            // </div>

            <div className="footer">
                <div className="pull-right">
                <a target="_blank" href='http://2018.fgsl.net/'><img src="https://fgslassets.pedrogyn.com.br/images/6751a0b7ed53c611c94a047d2f33f773" alt="icone" className='pull-right' style={{height: 20}}/> </a>
                </div>
                <div>
                    <strong> <a target="_blank" href='http://2018.fgsl.net/'>XV FGSL</a></strong>
                </div>
            </div>
        )
    }
}