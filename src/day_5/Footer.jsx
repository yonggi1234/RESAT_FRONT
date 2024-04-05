import React, { Component } from 'react';
import  './Footer.css';

class footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <div className="footer-inner">
                    <div className="footer-info">
                        <div>
                            <div className="footer-wrapperinfo">
                                <div className='footer-logo'>MINIINTERN</div>
                            </div>
                            <div className="footer-menu">
                                <ul className='footer-ul'>
                                    <li className='footer-li'>
                                        <a><div className='footer-link'>미니인턴</div></a>
                                    </li>
                                    <li className='footer-li'>
                                        <a><div className='footer-link'>스킬업</div></a>
                                    </li>
                                    <li className='footer-li'>
                                        <a><div className='footer-link'>M클래스</div></a>
                                    </li>
                                    <li className='footer-li'>
                                        <a><div className='footer-link'>채용관</div></a>
                                    </li>
                                    <li className='footer-li'>
                                        <a><div className='footer-link'>해피폴리오</div></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default footer;