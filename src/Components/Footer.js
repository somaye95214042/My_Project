import React from 'react';
import '../Styles/app.css';
import logo from "./Logo.svg";

const Footer = () => {
    return (
        <div className={'footer'}>

            <div className={'firstColumn'}>
                <img src={logo} alt={'logo'} width="200" height="100"/>
                <span>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some formed humour
            </span>
            </div>

            <div className={'secondColumn'}>
                <h1>Quick Links</h1>
                <ul>
                    <li>News</li>
                    <li>Careers</li>
                    <li>Terms of Use</li>
                    <li>Privacy project</li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </div>

            <div className={'thirdColumn'}>

                <h1>Contact</h1>
                <span className={'address'}>Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051</span>
                <span className={'email'}>info@yourdomain.com</span>
                <span className={'tel'}>+99 (0) 101 0000 888</span>

            </div>

        </div>
    )
}

export default Footer;