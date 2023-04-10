import React from 'react'
import Script from 'next/script'
const Footer = () => {
    return (
        <>
            <footer className="footer footer-black  footer-white ">
                <div className="container-fluid">
                    <div className="row">
                     
                        <div className="credits ml-auto">
                            <span className="copyright">
                                ©
                                {new Date().getFullYear()}
                                , made with <i className="fa fa-heart heart"></i> by Dev Team
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
