import React, { Component } from 'react'

import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const reader = new FileReader();

class ImageCropModal extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            value: null
        }
        this.onChange = this.onChange.bind(this)
    }

    _crop() {
        // console.log(this.refs.cropper);
    }

    salvar() {
        const base64 = this.refs.cropper.getCroppedCanvas().toDataURL()
        fetch(base64)
            .then((response) => response.blob())
            .then((blob) => {
                var file = blob
                file.name = Date.now() + '.' + file.type.split('/')[1]
                file.lastModifiedDate = new Date()
                file.originalFileName = file.name
                this.props.onChange(file)
                this.setState({value: null})
            })
        // const blob = new Blob(valor, {type})
        // this.refs.cropper.getCroppedCanvas().toBlob((blob) => {
        //     var file = blob
        //     file.name= Date.now() + '.'+ file.type.split('/')[1]
        //     file.lastModifiedDate = new Date()
        //     file.originalFileName = file.name
        //     console.log(file)
        //     this.props.onChange(file)
        // })
    }

    onChange(e) {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        reader.onload = () => {
            this.setState({ value: reader.result });
        };
        reader.readAsDataURL(files[0]);
    }




    render() {
        return (
            <div>
                <div className="form-group">
                    <label className="col-sm-3">{this.props.label}</label>
                    <div className="col-sm-9">
                        <div className="input-group">

                            <input type="text" className="form-control" readOnly contentEditable={false} value={this.props.value} />
                            <span className="input-group-btn">

                                <label data-toggle={`${this.props.dataToggle}`} data-target={`#${this.props.id}`} className="btn btn-primary">
                                    {this.props.buttonLabel}
                                </label>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id={`${this.props.id}`} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss={`${this.props.dataToggle}`}>&times;</button>
                                <h4 className="modal-title">{this.props.header}</h4>
                            </div>
                            <div className="modal-body">
                                <h3>{this.state.value == null ? 'Selecione uma imagem' : 'Faça o recorte da imagem'}</h3>
                                {
                                    this.state.value !== null &&
                                    <Cropper
                                        ref='cropper'
                                        src={this.state.value}
                                        style={{ height: 400, minWidth: 400 }}
                                        // Cropper.js options
                                        aspectRatio={this.props.ratio}
                                        guides={false}
                                        crop={this._crop.bind(this)}
                                    />
                                }
                                <label className="btn btn-primary btn-block" style={{ marginTop: 5 }}>
                                    Selecionar imagem
                                    <input onChange={(event) => { this.onChange(event) }} type="file" style={{ display: "none" }} />
                                </label>
                                {this.state.value !== null && <button type="button" data-dismiss={`${this.props.dataToggle}`} onClick={() => { this.salvar() }} className="btn btn-success btn-block" >Salvar</button>}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-warning" data-dismiss={`${this.props.dataToggle}`}>Cancelar</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default ImageCropModal
