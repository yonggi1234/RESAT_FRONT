import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    state = {
        id: '',
        password: '',
        clicked: false,
        validated: false,
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            message: ''
        });
    }

    handleButtonClick = () => {
        const { id, password } = this.state;
        if (id === 'root' && password === '1111') {
            this.setState({
                clicked: true,
                validated: true,
                error: ''
            });
            alert('로그인 되었습니다.'); 
        } else {
            this.setState({
                clicked: true,
                validated: false,
                error: 'ID 또는 비밀번호가 올바르지 않습니다.'
            });
        }
    }

    render() {
        const { validated, error } = this.state;
        return (
            <div>
                <div className='login'>
                    <div className="box">
                        <p>id: </p>
                        <input
                            type="text"
                            name="id"
                            value={this.state.id}
                            onChange={this.handleChange}
                            className={this.state.clicked ? (validated ? 'success' : 'failure') : ''}
                        />
                    </div>
                    <div className="box">
                        <p>password: </p>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            className={this.state.clicked ? (validated ? 'success' : 'failure') : ''}
                        />
                    </div>
                </div>
                <button onClick={this.handleButtonClick}>Confirm</button>
                {error && <div>{error}</div>}
            </div>
        );
    }
}

export default Login;
