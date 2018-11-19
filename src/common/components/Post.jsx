import React, { Component } from 'react'

class Post extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div className="contact-box">
                    <a onDoubleClick={()=>{alert('Curtiu')}}>

                        <div className="row">
                            <div className="col col-xs-3 col-sm-3 col-md-3" >
                                <img alt="image" className="img-circle m-t-xs img-responsive" src="https://instagram.fsdu15-1.fna.fbcdn.net/vp/b80d151bc973d81a2702740979e30b0a/5C3B1496/t51.2885-19/s150x150/36086502_638627869831480_5745327956008370176_n.jpg" />
                            </div>
                            <p>
                                Pedro Paulo <br />
                                Data: 30/08/2018 <br />
                                Horário: 23:33 <br />
                            </p>
                        </div>

                        <img id="" alt="image" className="m-t-xs img-responsive" src="https://instagram.fsdu15-1.fna.fbcdn.net/vp/799a337be27ab0ac03b7bed35899aaa5/5C30EB7C/t51.2885-15/e35/39404250_258558118117396_392783220304773120_n.jpg" />
                        <br />
                        <p className="m-b-xs">
                            #Repost @queridaansiedadeoficial with @get_repost
                            ・・・
                            Essa imagem define meu momento atual 😂😂😂 Alguém mais se identifica? 🙏

                            #Repost @pazeequilibrio (@get_repost)
                            ・・・
                        </p>
                        <br />
                    </a>
                    <div className="contact-box-footer">
                        <div className="m-t-xs btn-group">
                            <a className="btn btn-xs btn-white"><i className="fa fa-heart"></i> Curtir </a>
                            <a className="btn btn-xs btn-white"><i className="fa fa-comment"></i> Comentar</a>
                            <a className="btn btn-xs btn-white"><i className="fa fa-floppy-o"></i> Salvar</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post
