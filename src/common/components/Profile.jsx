import React, { Component } from 'react'

class Profile extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div className="contact-box">
                    <a href="/#/publicacoes">
                        <div className="col-sm-4">
                            <div className="text-center">
                                <img alt="image" className="img-circle m-t-xs img-responsive" src="http://bestvoyage.in/wp-content/uploads/profile.png" />
                                <div className="m-t-xs font-bold">Graphics designer</div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <h3><strong>John Smith</strong></h3>
                            <p><i className="fa fa-map-marker"></i> Riviera State 32/106</p>
                            <address>
                                <strong>Twitter, Inc.</strong><br />
                                795 Folsom Ave, Suite 600<br />
                                San Francisco, CA 94107<br />
                                <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                        </div>
                        <div className="clearfix"></div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Profile
