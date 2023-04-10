import React from 'react';
import Link from 'next/link';
const Sidebar = () => {
    return (
        <>
            <div className="sidebar bg-danger" data-color="white" data-active-color="danger">
                <div className="logo">
                    <a href="https://www.creative-tim.com" className="simple-text logo-mini">
                        <div className="logo-image-small">
                            <img src="/main/assets/img/chatgpt.png" />
                        </div>
                        <p>CT</p>
                    </a>
                    <a href="https://www.creative-tim.com" className="simple-text logo-normal">
                        Chat GPT
                        {/* <div className="logo-image-big">
                            <img src="/main/assets/img/logo-big.png" />
                        </div> */}
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="active">
                            <Link href="/dashboard">
                                <i className="nc-icon nc-bank"></i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/about">
                                <i className="nc-icon nc-diamond"></i>
                                <p>Old Response</p>
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link href="/logout">
                                <i className="nc-icon nc-pin-3"></i>
                                <p>Maps</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="./notifications.html">
                                <i className="nc-icon nc-bell-55"></i>
                                <p>Notifications</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="./user.html">
                                <i className="nc-icon nc-single-02"></i>
                                <p>User Profile</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="./tables.html">
                                <i className="nc-icon nc-tile-56"></i>
                                <p>Table List</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="./typography.html">
                                <i className="nc-icon nc-caps-small"></i>
                                <p>Typography</p>
                            </Link>
                        </li> */}
                        {/* <li className="active-pro">
                            <Link href="./upgrade.html">
                                <i className="nc-icon nc-spaceship"></i>
                                <p>Chat GPT</p>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
