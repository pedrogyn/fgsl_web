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
                <a href='https://apresentacao.xyz'><img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png" alt="icone" className='pull-right' style={{height: 20}}/> </a>
                </div>
                <div>
                    <strong> <a href='https://apresentacao.xyz'>XV FGSL</a></strong>
                </div>
            </div>
        )
    }
}