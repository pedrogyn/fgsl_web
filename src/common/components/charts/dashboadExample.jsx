import React, { Component } from 'react'

class DashboardExaple extends Component {

    render() {
        return (
            <div>
                <div className='ibox float-e-margins'>
                    <div className="ibox-title">
                        <span className="label label-primary pull-right">Hoje</span>
                        <h5>Relatório atual de dados</h5>
                    </div>
                    <div className='ibox-content'>
                        
                    </div>
                </div>
                <div ref={(divElement) => this.divElement = divElement} className="row">
                    <div className="col-lg-12">
                        <div className="ibox">
                            <div className="ibox-content">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="product_name">Projeto</label>
                                            <input type="text" id="product_name" name="product_name" value="" placeholder="Project Name" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="price">Nome</label>
                                            <input type="text" id="price" name="price" value="" placeholder="Name" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="quantity">Empresa</label>
                                            <input type="text" id="quantity" name="quantity" value="" placeholder="Company" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="status">Status</label>
                                            <select name="status" id="status" className="form-control">
                                                <option value="1" defaultValue="">Completo</option>
                                                <option value="0">Pendente</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Master project</td>
                                                <td>Patrick Smith</td>
                                                <td>$892,074</td>
                                                <td>Inceptos Hymenaeos Ltd</td>
                                                <td><strong>20%</strong></td>
                                                <td>Jul 14, 2015</td>
                                                <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Alpha project</td>
                                                <td>Alice Jackson</td>
                                                <td>$963,486</td>
                                                <td>Nec Euismod In Company</td>
                                                <td><strong>40%</strong></td>
                                                <td>Jul 16, 2015</td>
                                                <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Betha project</td>
                                                <td>John Smith</td>
                                                <td>$996,824</td>
                                                <td>Erat Volutpat</td>
                                                <td><strong>75%</strong></td>
                                                <td>Jul 18, 2015</td>
                                                <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Gamma project</td>
                                                <td>Anna Jordan</td>
                                                <td>$105,192</td>
                                                <td>Tellus Ltd</td>
                                                <td><strong>18%</strong></td>
                                                <td>Jul 22, 2015</td>
                                                <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Alpha project</td>
                                                <td>Alice Jackson</td>
                                                <td>$674,803</td>
                                                <td>Nec Euismod In Company</td>
                                                <td><strong>40%</strong></td>
                                                <td>Jul 16, 2015</td>
                                                <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Master project</td>
                                                <td>Patrick Smith</td>
                                                <td>$174,729</td>
                                                <td>Inceptos Hymenaeos Ltd</td>
                                                <td><strong>20%</strong></td>
                                                <td>Jul 14, 2015</td>
                                                <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Gamma project</td>
                                                <td>Anna Jordan</td>
                                                <td>$823,198</td>
                                                <td>Tellus Ltd</td>
                                                <td><strong>18%</strong></td>
                                                <td>Jul 22, 2015</td>
                                                <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Project <small>This is example of project</small></td>
                                                <td>Patrick Smith</td>
                                                <td>$778,696</td>
                                                <td>Inceptos Hymenaeos Ltd</td>
                                                <td><strong>20%</strong></td>
                                                <td>Jul 14, 2015</td>
                                                <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Alpha project</td>
                                                <td>Alice Jackson</td>
                                                <td>$861,063</td>
                                                <td>Nec Euismod In Company</td>
                                                <td><strong>40%</strong></td>
                                                <td>Jul 16, 2015</td>
                                                <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Betha project</td>
                                                <td>John Smith</td>
                                                <td>$109,125</td>
                                                <td>Erat Volutpat</td>
                                                <td><strong>75%</strong></td>
                                                <td>Jul 18, 2015</td>
                                                <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Gamma project</td>
                                                <td>Anna Jordan</td>
                                                <td>$600,978</td>
                                                <td>Tellus Ltd</td>
                                                <td><strong>18%</strong></td>
                                                <td>Jul 22, 2015</td>
                                                <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Alpha project</td>
                                                <td>Alice Jackson</td>
                                                <td>$150,161</td>
                                                <td>Nec Euismod In Company</td>
                                                <td><strong>40%</strong></td>
                                                <td>Jul 16, 2015</td>
                                                <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Project <small>This is example of project</small></td>
                                                <td>Patrick Smith</td>
                                                <td>$160,586</td>
                                                <td>Inceptos Hymenaeos Ltd</td>
                                                <td><strong>20%</strong></td>
                                                <td>Jul 14, 2015</td>
                                                <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Gamma project</td>
                                                <td>Anna Jordan</td>
                                                <td>$110,612</td>
                                                <td>Tellus Ltd</td>
                                                <td><strong>18%</strong></td>
                                                <td>Jul 22, 2015</td>
                                                <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardExaple