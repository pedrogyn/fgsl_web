

<div className="col-lg-12">
    <div className="ibox float-e-margins">
        <div className="ibox-title">
            <h5>All form elements <small>With custom checbox and radion elements.</small></h5>
            <div className="ibox-tools">
                <a className="collapse-link">
                    <i className="fa fa-chevron-up"></i>
                </a>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i className="fa fa-wrench"></i>
                </a>
                <ul className="dropdown-menu dropdown-user">
                    <li><a href="#">Config option 1</a>
                    </li>
                    <li><a href="#">Config option 2</a>
                    </li>
                </ul>
                <a className="close-link">
                    <i className="fa fa-times"></i>
                </a>
            </div>
        </div>
        <div className="ibox-content">
            <form method="get" className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-2 control-label">Normal</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Help text</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" />
                        <span className="help-block m-b-none">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Password</label>

                    <div className="col-sm-10">
                        <input type="password" className="form-control" name="password" />
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Placeholder</label>
                    <div className="col-sm-10"><input type="text" placeholder="placeholder" className="form-control" /></div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Disabled</label>

                    <div className="col-lg-10">
                        <input type="text" disabled="" placeholder="Disabled input here..." className="form-control" />
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Static control</label>

                    <div className="col-lg-10">
                        <p className="form-control-static">email@example.com</p>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Checkboxes and radios
                        <br />
                        <small className="text-navy">Normal Bootstrap elements</small>
                    </label>

                    <div className="col-sm-10">
                        <div>
                            <label>
                                <input type="checkbox" value="" /> Option one is this and that—be sure to include why it's great
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" checked="" value="option1" id="optionsRadios1" name="optionsRadios" /> Option one is this and that—be sure to
                                            include why it's great
                                    </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" value="option2" id="optionsRadios2" name="optionsRadios" />
                                Option two can be something else and selecting it will deselect option one
                            </label>
                        </div>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group"><label className="col-sm-2 control-label">Inline checkboxes</label>

                    <div className="col-sm-10"><label className="checkbox-inline"> <input type="checkbox" value="option1" id="inlineCheckbox1" /> a </label> <label className="checkbox-inline" >
                        <input type="checkbox" value="option2" id="inlineCheckbox2" /> b </label> <label className="checkbox-inline" >
                            <input type="checkbox" value="option3" id="inlineCheckbox3" /> c </label></div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group"><label className="col-sm-2 control-label" >Checkboxes &amp, radios <br /><small className="text-navy">Custom elements</small></label>

                


                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group"><label className="col-sm-2 control-label">Column sizing</label>

                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-md-2"><input type="text" placeholder=".col-md-2" className="form-control" /></div>
                            <div className="col-md-3"><input type="text" placeholder=".col-md-3" className="form-control" /></div>
                            <div className="col-md-4"><input type="text" placeholder=".col-md-4" className="form-control" /></div>
                        </div>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group"><label className="col-sm-2 control-label">Input groups</label>

                    <div className="col-sm-10">
                        <div className="input-group m-b"><span className="input-group-addon">@</span> <input type="text" placeholder="Username" className="form-control" /></div>
                        <div className="input-group m-b"><input type="text" className="form-control" /> <span className="input-group-addon">.00</span></div>
                        <div className="input-group m-b"><span className="input-group-addon">$</span> <input type="text" className="form-control" /> <span className="input-group-addon">.00</span></div>
                        <div className="input-group m-b"><span className="input-group-addon"> <input type="checkbox" /> </span> <input type="text" className="form-control" /></div>
                        <div className="input-group"><span className="input-group-addon"> <input type="radio" /> </span> <input type="text" className="form-control" /></div>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group"><label className="col-sm-2 control-label">Button addons</label>

                    <div className="col-sm-10">
                        <div className="input-group m-b"><span className="input-group-btn">
                            <button type="button" className="btn btn-primary">Go!</button> </span> <input type="text" className="form-control" />
                        </div>
                        <div className="input-group"><input type="text" className="form-control" /> <span className="input-group-btn"> <button type="button" className="btn btn-primary">Go!
                                        </button> </span></div>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group"><label className="col-sm-2 control-label">With dropdowns</label>

                    <div className="col-sm-10">
                        <div className="input-group m-b">
                            <div className="input-group-btn">
                                <button data-toggle="dropdown" className="btn btn-white dropdown-toggle" type="button">Action <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>
                            <input type="text" className="form-control" /></div>
                        <div className="input-group"><input type="text" className="form-control" />

                            <div className="input-group-btn">
                                <button data-toggle="dropdown" className="btn btn-white dropdown-toggle" type="button">Action <span className="caret"></span></button>
                                <ul className="dropdown-menu pull-right">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group"><label className="col-sm-2 control-label">Segmented</label>

                    <div className="col-sm-10">
                        <div className="input-group m-b">
                            <div className="input-group-btn">
                                <button tabindex="-1" className="btn btn-white" type="button">Action</button>
                                <button data-toggle="dropdown" className="btn btn-white dropdown-toggle" type="button"><span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>
                            <input type="text" className="form-control" /></div>
                        <div className="input-group"><input type="text" className="form-control" />

                            <div className="input-group-btn">
                                <button tabindex="-1" className="btn btn-white" type="button">Action</button>
                                <button data-toggle="dropdown" className="btn btn-white dropdown-toggle" type="button"><span className="caret"></span></button>
                                <ul className="dropdown-menu pull-right">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <div className="col-sm-4 col-sm-offset-2">
                        <button className="btn btn-white" type="submit">Cancel</button>
                        <button className="btn btn-primary" type="submit">Save changes</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
</div>

