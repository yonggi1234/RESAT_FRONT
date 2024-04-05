import React, { Component } from 'react';
import  './common.css';
import  './body.css';

class body extends Component {
    render() {
        return (
            <div className='body-container'>
                <div className="top">
                    <p className="top-title">
                    기업의 업무를 온라인으로 수행하며,
                    <br/>
                    </p>
                    <p className="middle-title">
                    실무 경험을 쌓으면서 취업하세요.
                    </p>
                    <img className='laptop' src='https://miniintern.com/static/svg/about/%EC%84%9C%EB%B9%84%EC%8A%A4%EC%86%8C%EA%B0%9C_%EB%85%B8%ED%8A%B8%EB%B6%81_%EC%95%84%EC%9D%B4%EC%BD%98_pc.svg'></img>
                    <div className="behind-img"></div>
                </div>
                <div className="miniintern">
                    <h3 className='intern-title'>미니인턴이란?</h3>
                
                    <div className="about-intern">
                        
                        <div className="intern-card">
                            <img className='intern-img' src="https://miniintern.com/static/svg/about/%EB%AF%B8%EB%8B%88_%EC%9D%B8%ED%84%B4%EC%8B%AD_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8_%EC%95%84%EC%9D%B4%EC%BD%98.svg"/>
                            <p className='about-internship'>미니+인턴십 프로그램</p>
                            <p className='text-internship'>
                                미니인턴은 구직자들이 기업의
                                <br/>
                                실무를 경험하고 자신의
                                <br/>
                                역량을 증명할 수 있는 곳입니다.
                            </p>
                        </div>
                        <div className="intern-card">
                            <img className='intern-img' src="https://miniintern.com/static/svg/about/%EC%B5%9C%EA%B7%BC_%EC%B7%A8%EC%97%85%EC%8B%9C%EC%9E%A5%EC%9D%80_%EC%95%84%EC%9D%B4%EC%BD%98.svg"/>
                            <p className='about-internship'>최근 취업시장은...</p>
                            <p className='text-internship'>
                                신입에게도 경력과 경험을 통하여
                                <br/>
                                직무역량이 소양한
                                <br/>
                                인재를 필요로 합니다.
                            </p>
                        </div>
                        <div className="intern-card">
                            <img className='intern-img' src="https://miniintern.com/static/svg/about/%EA%B7%B8%EB%9E%98%EC%84%9C_%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4_%EC%95%84%EC%9D%B4%EC%BD%98.svg"/>
                            <p className='about-internship'>그래서, 미니인턴.</p>
                            <p className='text-internship'>
                                미니인턴은 구직활동을 하는 것만으로
                                <br/>
                                구직자의 포트폴리오를 완성시켜
                                <br/>
                                드립니다. 이고셍서 경험을 쌓고, 당신의
                                <br/>
                                역량을 완성해 보세요
                            </p>
                        </div>

                    </div>
                </div>

                
            </div>
        );
    }
}

export default body;