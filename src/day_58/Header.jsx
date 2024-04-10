import React, { Component } from 'react';
import  './common.css';
import  './header.css';


class header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className='header-inner'>
                    <div className='header-logo'>
                        <div className='logo'>MINIINTERN</div>
                    </div>
                    <div className='header-nav'>
                        <ul className='header-ul'>
                            
                            <li className='nav-li'>
                                <a><div className='link'>미니인턴</div></a>
                            </li>
                            <li className='nav-li'>
                                <a><div className='link'>스킬업</div></a>
                            </li>
                            <li className='nav-li'>
                                <a><div className='link'>M클래스</div></a>
                            </li>
                            <li className='nav-li'>
                                <a><div className='link'>채용관</div></a>
                            </li>
                            <li className='nav-li'>
                                <a><div className='link'>해피폴리오</div></a>
                            </li>
                        </ul>
                    </div>
                    <div className='info'>
                        <div className="user">
                            <ul className='ul-info'>
                            <li className='li-info'>
                                <a><div className='div-info'>서비스 소개</div></a>
                            </li>
                            <li className='li-info'>
                                <a><div className='div-info'>회원 가입</div></a>
                            </li>
                            <li className='li-info'>
                                <a><div className='div-info'>로그인</div></a>
                            </li>
                            <li className='li-info'>
                                <a><div className='div-info'>기업 회원</div></a>
                            </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default header;