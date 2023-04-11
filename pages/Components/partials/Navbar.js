import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar navbar-absolute fixed-top navbar-transparent">
                <div className="container-fluid">
                    <div className="navbar-wrapper">
                        <div className="navbar-toggle">
                            <button type="button" className="navbar-toggler">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        <a className="navbar-brand" href="javascript:;">CHAT GPT</a>
                    </div>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </button> */}
                    <div className="collapse navbar-collapse justify-content-end" id="navigation">
                      <strong>Hello, Guest</strong>
                        {/* <form>
                            <div className="input-group no-border">
                                <input type="text" value="" className="form-control" placeholder="Search..." />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <i className="nc-icon nc-zoom-split"></i>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link btn-magnify" href="javascript:;">
                                    <i className="nc-icon nc-layout-11"></i>
                                    <p>
                                        <span className="d-lg-none d-md-block">Stats</span>
                                    </p>
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link btn-rotate" href="javascript:;">
                                    <i className="nc-icon nc-settings-gear-65"></i>
                                    <p>
                                        <span className="d-lg-none d-md-block">Account</span>
                                    </p>
                                </a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
