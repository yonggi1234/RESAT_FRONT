import React from 'react';
import './Challenge_3.css';

const InputTodo = ({ value, onChange, onInsert }) => {
    const handleInsert = (priority) => {
        onInsert(priority);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onInsert();
        }
    }

    return (
        <div className='todo-input'>
            <input onChange={onChange} value={value} onKeyDown={handleKeyPress} />
            <div className='add-button' onClick={() => handleInsert('낮음')}>낮음</div>
            <div className='add-button' onClick={() => handleInsert('보통')}>보통</div>
            <div className='add-button' onClick={() => handleInsert('높음')}>높음</div>
            <div className='add-button' onClick={() => handleInsert('아주 높음')}>아주 높음</div>
        </div>
    );
};

export default InputTodo;
